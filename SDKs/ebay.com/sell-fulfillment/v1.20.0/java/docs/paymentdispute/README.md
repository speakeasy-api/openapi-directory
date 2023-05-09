# paymentDispute

### Available Operations

* [acceptPaymentDispute](#acceptpaymentdispute) - Accept Payment Dispute
* [addEvidence](#addevidence) - Add an Evidence File
* [contestPaymentDispute](#contestpaymentdispute) - Contest Payment Dispute
* [fetchEvidenceContent](#fetchevidencecontent) - Get Payment Dispute Evidence File
* [getActivities](#getactivities) - Get Payment Dispute Activity
* [getPaymentDispute](#getpaymentdispute) - Get Payment Dispute Details
* [getPaymentDisputeSummaries](#getpaymentdisputesummaries) - Search Payment Dispute by Filters
* [updateEvidence](#updateevidence) - Update evidence
* [uploadEvidenceFile](#uploadevidencefile) - Upload an Evidence File

## acceptPaymentDispute

This method is used if the seller wishes to accept a payment dispute. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the <strong>getPaymentDisputeSummaries</strong> method.<br><br>The <strong>revision</strong> field in the request payload is required, and the <strong>returnAddress</strong> field should be supplied if the seller is expecting the buyer to return the item. See the Request Payload section for more information on theste fields.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptPaymentDisputeRequest;
import org.openapis.openapi.models.operations.AcceptPaymentDisputeResponse;
import org.openapis.openapi.models.operations.AcceptPaymentDisputeSecurity;
import org.openapis.openapi.models.shared.AcceptPaymentDisputeRequest;
import org.openapis.openapi.models.shared.Phone;
import org.openapis.openapi.models.shared.ReturnAddress;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AcceptPaymentDisputeRequest req = new AcceptPaymentDisputeRequest("quis") {{
                acceptPaymentDisputeRequest = new AcceptPaymentDisputeRequest() {{
                    returnAddress = new ReturnAddress() {{
                        addressLine1 = "veritatis";
                        addressLine2 = "deserunt";
                        city = "West Ritaworth";
                        country = "San Marino";
                        county = "odit";
                        fullName = "at";
                        postalCode = "94784-5761";
                        primaryPhone = new Phone() {{
                            countryCode = "PM";
                            number = "officia";
                        }};;
                        stateOrProvince = "occaecati";
                    }};;
                    revision = 143353;
                }};;
            }};            

            AcceptPaymentDisputeResponse res = sdk.paymentDispute.acceptPaymentDispute(req, new AcceptPaymentDisputeSecurity("deleniti") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addEvidence

This method is used by the seller to add one or more evidence files to address a payment dispute initiated by the buyer. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the <strong>getPaymentDisputeSummaries</strong> method.<br><br><span class="tablenote"><strong>Note:</strong> All evidence files should be uploaded using <strong>addEvidence</strong> and <strong>updateEvidence</strong>  before the seller decides to contest the payment dispute. Once the seller has officially contested the dispute (using <strong>contestPaymentDispute</strong> or through My eBay), the <strong>addEvidence</strong> and <strong>updateEvidence</strong> methods can no longer be used. In the <strong>evidenceRequests</strong> array of the <strong>getPaymentDispute</strong> response, eBay prompts the seller with the type of evidence file(s) that will be needed to contest the payment dispute.</span><br><br>The file(s) to add are identified through the <strong>files</strong> array in the request payload.  Adding one or more new evidence files for a payment dispute triggers the creation of an evidence file, and the unique identifier for the new evidence file is automatically generated and returned in the <strong>evidenceId</strong> field of the <strong>addEvidence</strong> response payload upon a successful call.<br><br>The type of evidence being added should be specified in the <strong>evidenceType</strong> field. All files being added (if more than one) should correspond to this evidence type.<br><br>Upon a successful call, an <strong>evidenceId</strong> value is returned in the response. This indicates that a new evidence set has been created for the payment dispute, and this evidence set includes the evidence file(s) that were passed in to the <strong>fileId</strong> array. The <strong>evidenceId</strong> value will be needed if the seller wishes to add to the evidence set by using the <strong>updateEvidence</strong> method, or if they want to retrieve a specific evidence file within the evidence set by using the <strong>fetchEvidenceContent</strong> method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddEvidenceRequest;
import org.openapis.openapi.models.operations.AddEvidenceResponse;
import org.openapis.openapi.models.operations.AddEvidenceSecurity;
import org.openapis.openapi.models.shared.AddEvidencePaymentDisputeRequest;
import org.openapis.openapi.models.shared.FileEvidence;
import org.openapis.openapi.models.shared.OrderLineItems;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddEvidenceRequest req = new AddEvidenceRequest("hic") {{
                addEvidencePaymentDisputeRequest = new AddEvidencePaymentDisputeRequest() {{
                    evidenceType = "optio";
                    files = new org.openapis.openapi.models.shared.FileEvidence[]{{
                        add(new FileEvidence() {{
                            fileId = "beatae";
                        }}),
                        add(new FileEvidence() {{
                            fileId = "commodi";
                        }}),
                        add(new FileEvidence() {{
                            fileId = "molestiae";
                        }}),
                    }};
                    lineItems = new org.openapis.openapi.models.shared.OrderLineItems[]{{
                        add(new OrderLineItems() {{
                            itemId = "qui";
                            lineItemId = "impedit";
                        }}),
                        add(new OrderLineItems() {{
                            itemId = "cum";
                            lineItemId = "esse";
                        }}),
                    }};
                }};;
            }};            

            AddEvidenceResponse res = sdk.paymentDispute.addEvidence(req, new AddEvidenceSecurity("ipsum") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.addEvidencePaymentDisputeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contestPaymentDispute

This method is used if the seller wishes to contest a payment dispute initiated by the buyer. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the <strong>getPaymentDisputeSummaries</strong> method.<br><br><span class="tablenote"><strong>Note:</strong> Before contesting a payment dispute, the seller must upload all supporting files using the <strong>addEvidence</strong> and <strong>updateEvidence</strong> methods. Once the seller has officially contested the dispute (using <strong>contestPaymentDispute</strong>), the <strong>addEvidence</strong> and <strong>updateEvidence</strong> methods can no longer be used. In the <strong>evidenceRequests</strong> array of the <strong>getPaymentDispute</strong> response, eBay prompts the seller with the type of supporting file(s) that will be needed to contest the payment dispute.</span><br><br>If a seller decides to contest a payment dispute, that seller should be prepared to provide supporting documents such as proof of delivery, proof of authentication, or other documents. The type of supporting documents that the seller will provide will depend on why the buyer filed the payment dispute.<br><br>The <strong>revision</strong> field in the request payload is required, and the <strong>returnAddress</strong> field should be supplied if the seller is expecting the buyer to return the item. See the Request Payload section for more information on these fields.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContestPaymentDisputeRequest;
import org.openapis.openapi.models.operations.ContestPaymentDisputeResponse;
import org.openapis.openapi.models.operations.ContestPaymentDisputeSecurity;
import org.openapis.openapi.models.shared.ContestPaymentDisputeRequest;
import org.openapis.openapi.models.shared.Phone;
import org.openapis.openapi.models.shared.ReturnAddress;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContestPaymentDisputeRequest req = new ContestPaymentDisputeRequest("excepturi") {{
                contestPaymentDisputeRequest = new ContestPaymentDisputeRequest() {{
                    note = "aspernatur";
                    returnAddress = new ReturnAddress() {{
                        addressLine1 = "perferendis";
                        addressLine2 = "ad";
                        city = "Cormierfurt";
                        country = "Cyprus";
                        county = "natus";
                        fullName = "laboriosam";
                        postalCode = "96436-4960";
                        primaryPhone = new Phone() {{
                            countryCode = "AX";
                            number = "reiciendis";
                        }};;
                        stateOrProvince = "est";
                    }};;
                    revision = 653140;
                }};;
            }};            

            ContestPaymentDisputeResponse res = sdk.paymentDispute.contestPaymentDispute(req, new ContestPaymentDisputeSecurity("laborum") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchEvidenceContent

This call retrieves a specific evidence file for a payment dispute. The following three identifying parameters are needed in the call URI:<ul><li><strong>payment_dispute_id</strong>: the identifier of the payment dispute. The identifier of each payment dispute is returned in the <strong>getPaymentDisputeSummaries</strong> response.</li><li><strong>evidence_id</strong>: the identifier of the evidential file set. The identifier of an evidential file set for a payment dispute is returned under the <strong>evidence</strong> array in the <strong>getPaymentDispute</strong> response.</li><li><strong>file_id</strong>: the identifier of an evidential file. This file must belong to the evidential file set identified through the <strong>evidence_id</strong> query parameter. The identifier of each evidential file is returned under the <strong>evidence.files</strong> array in the <strong>getPaymentDispute</strong> response.</li></ul><p>An actual binary file is returned if the call is successful. An error will occur if any of three identifiers are invalid.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchEvidenceContentRequest;
import org.openapis.openapi.models.operations.FetchEvidenceContentResponse;
import org.openapis.openapi.models.operations.FetchEvidenceContentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchEvidenceContentRequest req = new FetchEvidenceContentRequest("dolores", "dolorem", "corporis");            

            FetchEvidenceContentResponse res = sdk.paymentDispute.fetchEvidenceContent(req, new FetchEvidenceContentSecurity("explicabo") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActivities

This method retrieve a log of activity for a payment dispute. The identifier of the payment dispute is passed in as a path parameter. The output includes a timestamp for each action of the payment dispute, from creation to resolution, and all steps in between.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActivitiesRequest;
import org.openapis.openapi.models.operations.GetActivitiesResponse;
import org.openapis.openapi.models.operations.GetActivitiesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetActivitiesRequest req = new GetActivitiesRequest("nobis");            

            GetActivitiesResponse res = sdk.paymentDispute.getActivities(req, new GetActivitiesSecurity("enim") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.paymentDisputeActivityHistory != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPaymentDispute

This method retrieves detailed information on a specific payment dispute. The payment dispute identifier is passed in as path parameter at the end of the call URI.<br><br>Below is a summary of the information that is retrieved:<ul><li>Current status of payment dispute</li><li>Amount of the payment dispute</li><li>Reason the payment dispute was opened</li><li>Order and line items associated with the payment dispute</li><li>Seller response options if an action is currently required on the payment dispute</li><li>Details on the results of the payment dispute if it has been closed</li><li>Details on any evidence that was provided by the seller to fight the payment dispute</li></ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentDisputeRequest;
import org.openapis.openapi.models.operations.GetPaymentDisputeResponse;
import org.openapis.openapi.models.operations.GetPaymentDisputeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaymentDisputeRequest req = new GetPaymentDisputeRequest("omnis");            

            GetPaymentDisputeResponse res = sdk.paymentDispute.getPaymentDispute(req, new GetPaymentDisputeSecurity("nemo") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.paymentDispute != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPaymentDisputeSummaries

This method is used retrieve one or more payment disputes filed against the seller. These payment disputes can be open or recently closed. The following filter types are available in the request payload to control the payment disputes that are returned:<ul><li>Dispute filed against a specific order (<b>order_id</b> parameter is used)</li><li>Dispute(s) filed by a specific buyer (<b>buyer_username</b> parameter is used)</li><li>Dispute(s) filed within a specific date range (<b>open_date_from</b> and/or <b>open_date_to</b> parameters are used)</li><li>Disputes in a specific state (<b>payment_dispute_status</b> parameter is used)</li></ul>More than one of these filter types can be used together. See the request payload request fields for more information about how each filter is used.<br><br>If none of the filters are used, all open and recently closed payment disputes are returned.<br><br>Pagination is also available. See the <b>limit</b> and <b>offset</b> fields for more information on how pagination is used for this method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentDisputeSummariesRequest;
import org.openapis.openapi.models.operations.GetPaymentDisputeSummariesResponse;
import org.openapis.openapi.models.operations.GetPaymentDisputeSummariesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaymentDisputeSummariesRequest req = new GetPaymentDisputeSummariesRequest() {{
                buyerUsername = "minima";
                limit = "excepturi";
                offset = "accusantium";
                openDateFrom = "iure";
                openDateTo = "culpa";
                orderId = "doloribus";
                paymentDisputeStatus = "sapiente";
            }};            

            GetPaymentDisputeSummariesResponse res = sdk.paymentDispute.getPaymentDisputeSummaries(req, new GetPaymentDisputeSummariesSecurity("architecto") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.disputeSummaryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEvidence

This method is used by the seller to update an existing evidence set for a payment dispute with one or more evidence files. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the <strong>getPaymentDisputeSummaries</strong> method.<br><br><span class="tablenote"><strong>Note:</strong> All evidence files should be uploaded using <strong>addEvidence</strong> and <strong>updateEvidence</strong>  before the seller decides to contest the payment dispute. Once the seller has officially contested the dispute (using <strong>contestPaymentDispute</strong> or through My eBay), the <strong>addEvidence</strong> and <strong>updateEvidence</strong> methods can no longer be used. In the <strong>evidenceRequests</strong> array of the <strong>getPaymentDispute</strong> response, eBay prompts the seller with the type of evidence file(s) that will be needed to contest the payment dispute.</span><br><br>The unique identifier of the evidence set to update is specified through the <strong>evidenceId</strong> field, and the file(s) to add are identified through the <strong>files</strong> array in the request payload. The unique identifier for an evidence file is automatically generated and returned in the <strong>fileId</strong> field of the <strong>uploadEvidence</strong> response payload upon a successful call. Sellers must make sure to capture the <strong>fileId</strong> value for each evidence file that is uploaded with the <strong>uploadEvidence</strong> method.<br><br>The type of evidence being added should be specified in the <strong>evidenceType</strong> field.  All files being added (if more than one) should correspond to this evidence type.<br><br>Upon a successful call, an http status code of <code>204 Success</code> is returned. There is no response payload unless an error occurs. To verify that a new file is a part of the evidence set, the seller can use the <strong>fetchEvidenceContent</strong> method, passing in the proper <strong>evidenceId</strong> and <strong>fileId</strong> values.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEvidenceRequest;
import org.openapis.openapi.models.operations.UpdateEvidenceResponse;
import org.openapis.openapi.models.operations.UpdateEvidenceSecurity;
import org.openapis.openapi.models.shared.FileEvidence;
import org.openapis.openapi.models.shared.OrderLineItems;
import org.openapis.openapi.models.shared.UpdateEvidencePaymentDisputeRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateEvidenceRequest req = new UpdateEvidenceRequest("mollitia") {{
                updateEvidencePaymentDisputeRequest = new UpdateEvidencePaymentDisputeRequest() {{
                    evidenceId = "dolorem";
                    evidenceType = "culpa";
                    files = new org.openapis.openapi.models.shared.FileEvidence[]{{
                        add(new FileEvidence() {{
                            fileId = "repellat";
                        }}),
                    }};
                    lineItems = new org.openapis.openapi.models.shared.OrderLineItems[]{{
                        add(new OrderLineItems() {{
                            itemId = "occaecati";
                            lineItemId = "numquam";
                        }}),
                        add(new OrderLineItems() {{
                            itemId = "commodi";
                            lineItemId = "quam";
                        }}),
                        add(new OrderLineItems() {{
                            itemId = "molestiae";
                            lineItemId = "velit";
                        }}),
                    }};
                }};;
            }};            

            UpdateEvidenceResponse res = sdk.paymentDispute.updateEvidence(req, new UpdateEvidenceSecurity("error") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## uploadEvidenceFile

This method is used to upload an evidence file for a contested payment dispute. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the <strong>getPaymentDisputeSummaries</strong> method.<br><br><span class="tablenote"><strong>Note:</strong> The <strong>uploadEvidenceFile</strong> only uploads an encrypted, binary image file (using <strong>multipart/form-data</strong> HTTP request header), and does not have a JSON-based request payload.<br><br>Use 'file' as the name of the key that you use to upload the image file. The upload will not be successful if a different key name is used.<br><br>The three image formats supported at this time are <strong>.JPEG</strong>, <strong>.JPG</strong>, and <strong>.PNG</strong>.</span><br><br>After the file is successfully uploaded, the seller will need to grab the <strong>fileId</strong> value in the response payload to add this file to a new evidence set using the <strong>addEvidence</strong> method, or to add this file to an existing evidence set using the <strong>updateEvidence</strong> method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadEvidenceFileRequest;
import org.openapis.openapi.models.operations.UploadEvidenceFileResponse;
import org.openapis.openapi.models.operations.UploadEvidenceFileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UploadEvidenceFileRequest req = new UploadEvidenceFileRequest("quia");            

            UploadEvidenceFileResponse res = sdk.paymentDispute.uploadEvidenceFile(req, new UploadEvidenceFileSecurity("quis") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.fileEvidence != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
