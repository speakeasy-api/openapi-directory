# estimation

### Available Operations

* [estimationApiAll](#estimationapiall) - Return all estimation for the account
* [estimationApiChangeStatusForm](#estimationapichangestatusform) - Change estimation status
* [estimationApiChangeStatusJson](#estimationapichangestatusjson) - Change estimation status
* [estimationApiChangeStatusRaw](#estimationapichangestatusraw) - Change estimation status
* [estimationApiDeleteForm](#estimationapideleteform) - Delete an existing estimation
* [estimationApiDeleteJson](#estimationapideletejson) - Delete an existing estimation
* [estimationApiDeleteRaw](#estimationapideleteraw) - Delete an existing estimation
* [estimationApiDetails](#estimationapidetails) - Return estimation data
* [estimationApiNewForm](#estimationapinewform) - Create an estimation
* [estimationApiNewJson](#estimationapinewjson) - Create an estimation
* [estimationApiNewRaw](#estimationapinewraw) - Create an estimation
* [estimationApiSendToClientForm](#estimationapisendtoclientform) - Send the provided estimation to the client
* [estimationApiSendToClientJson](#estimationapisendtoclientjson) - Send the provided estimation to the client
* [estimationApiSendToClientRaw](#estimationapisendtoclientraw) - Send the provided estimation to the client
* [estimationApiStatus](#estimationapistatus) - Retrieve the status of the estimation
* [estimationApiUpdateForm](#estimationapiupdateform) - Update an existing estimation
* [estimationApiUpdateJson](#estimationapiupdatejson) - Update an existing estimation
* [estimationApiUpdateRaw](#estimationapiupdateraw) - Update an existing estimation
* [estimationApiUri](#estimationapiuri) - Return the unique url to the client's invoice

## estimationApiAll

Return all estimation for the account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EstimationApiAllRequest;
import org.openapis.openapi.models.operations.EstimationApiAllResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EstimationApiAllRequest req = new EstimationApiAllRequest("aliquid", "cupiditate") {{
                queryOptionsPage = 552822;
                queryOptionsPageSize = 20107;
            }};            

            EstimationApiAllResponse res = sdk.estimation.estimationApiAll(req);

            if (res.listResultEstimationDetailsApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## estimationApiChangeStatusForm

Change estimation status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EstimationApiChangeStatusFormRequest;
import org.openapis.openapi.models.operations.EstimationApiChangeStatusFormResponse;
import org.openapis.openapi.models.shared.EstimationChangeStatusApiModel;
import org.openapis.openapi.models.shared.EstimationChangeStatusApiModelStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EstimationApiChangeStatusFormRequest req = new EstimationApiChangeStatusFormRequest(                new EstimationChangeStatusApiModel() {{
                                id = 164940;
                                status = EstimationChangeStatusApiModelStatusEnum.REJECTED;
                            }};, "ipsam", "alias");            

            EstimationApiChangeStatusFormResponse res = sdk.estimation.estimationApiChangeStatusForm(req);

            if (res.estimationApiChangeStatusForm200ApplicationJSONBoolean != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## estimationApiChangeStatusJson

Change estimation status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EstimationApiChangeStatusJsonRequest;
import org.openapis.openapi.models.operations.EstimationApiChangeStatusJsonResponse;
import org.openapis.openapi.models.shared.EstimationChangeStatusApiModel;
import org.openapis.openapi.models.shared.EstimationChangeStatusApiModelStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EstimationApiChangeStatusJsonRequest req = new EstimationApiChangeStatusJsonRequest(                new EstimationChangeStatusApiModel() {{
                                id = 146441;
                                status = EstimationChangeStatusApiModelStatusEnum.REJECTED;
                            }};, "excepturi", "tempora");            

            EstimationApiChangeStatusJsonResponse res = sdk.estimation.estimationApiChangeStatusJson(req);

            if (res.estimationApiChangeStatusJSON200ApplicationJSONBoolean != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## estimationApiChangeStatusRaw

Change estimation status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EstimationApiChangeStatusRawRequest;
import org.openapis.openapi.models.operations.EstimationApiChangeStatusRawResponse;
import org.openapis.openapi.models.shared.EstimationChangeStatusApiModel;
import org.openapis.openapi.models.shared.EstimationChangeStatusApiModelStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EstimationApiChangeStatusRawRequest req = new EstimationApiChangeStatusRawRequest("facilis".getBytes(), "tempore", "labore");            

            EstimationApiChangeStatusRawResponse res = sdk.estimation.estimationApiChangeStatusRaw(req);

            if (res.estimationApiChangeStatusRaw200ApplicationJSONBoolean != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## estimationApiDeleteForm

Delete an existing estimation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EstimationApiDeleteFormRequest;
import org.openapis.openapi.models.operations.EstimationApiDeleteFormResponse;
import org.openapis.openapi.models.shared.EstimationDeleteApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EstimationApiDeleteFormRequest req = new EstimationApiDeleteFormRequest(                new EstimationDeleteApiModel() {{
                                id = 962189;
                            }};, "eum", "non");            

            EstimationApiDeleteFormResponse res = sdk.estimation.estimationApiDeleteForm(req);

            if (res.estimationApiDeleteForm200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## estimationApiDeleteJson

Delete an existing estimation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EstimationApiDeleteJsonRequest;
import org.openapis.openapi.models.operations.EstimationApiDeleteJsonResponse;
import org.openapis.openapi.models.shared.EstimationDeleteApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EstimationApiDeleteJsonRequest req = new EstimationApiDeleteJsonRequest(                new EstimationDeleteApiModel() {{
                                id = 756107;
                            }};, "sint", "aliquid");            

            EstimationApiDeleteJsonResponse res = sdk.estimation.estimationApiDeleteJson(req);

            if (res.estimationApiDeleteJSON200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## estimationApiDeleteRaw

Delete an existing estimation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EstimationApiDeleteRawRequest;
import org.openapis.openapi.models.operations.EstimationApiDeleteRawResponse;
import org.openapis.openapi.models.shared.EstimationDeleteApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EstimationApiDeleteRawRequest req = new EstimationApiDeleteRawRequest("provident".getBytes(), "necessitatibus", "sint");            

            EstimationApiDeleteRawResponse res = sdk.estimation.estimationApiDeleteRaw(req);

            if (res.estimationApiDeleteRaw200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## estimationApiDetails

Return estimation data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EstimationApiDetailsRequest;
import org.openapis.openapi.models.operations.EstimationApiDetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EstimationApiDetailsRequest req = new EstimationApiDetailsRequest(638921, "dolor", "debitis");            

            EstimationApiDetailsResponse res = sdk.estimation.estimationApiDetails(req);

            if (res.estimationFullDetailsApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## estimationApiNewForm

Create an estimation

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EstimationApiNewFormRequest;
import org.openapis.openapi.models.operations.EstimationApiNewFormResponse;
import org.openapis.openapi.models.shared.EstimationCreateApiModel;
import org.openapis.openapi.models.shared.EstimationCreateApiModelStatusEnum;
import org.openapis.openapi.models.shared.EstimationCreateAttachmentApiModel;
import org.openapis.openapi.models.shared.EstimationCreateAttachmentApiModelTypeEnum;
import org.openapis.openapi.models.shared.EstimationCreateItemApiModel;
import org.openapis.openapi.models.shared.EstimationGatewayApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EstimationApiNewFormRequest req = new EstimationApiNewFormRequest(                new EstimationCreateApiModel() {{
                                attachments = new org.openapis.openapi.models.shared.EstimationCreateAttachmentApiModel[]{{
                                    add(new EstimationCreateAttachmentApiModel() {{
                                        link = "dolorum";
                                        obfuscatedFileName = "in";
                                        originalFileName = "in";
                                        size = 846409L;
                                        type = EstimationCreateAttachmentApiModelTypeEnum.UPLOADED;
                                    }}),
                                    add(new EstimationCreateAttachmentApiModel() {{
                                        link = "rerum";
                                        obfuscatedFileName = "dicta";
                                        originalFileName = "magnam";
                                        size = 767024L;
                                        type = EstimationCreateAttachmentApiModelTypeEnum.UPLOADED;
                                    }}),
                                    add(new EstimationCreateAttachmentApiModel() {{
                                        link = "ea";
                                        obfuscatedFileName = "aliquid";
                                        originalFileName = "laborum";
                                        size = 881104L;
                                        type = EstimationCreateAttachmentApiModelTypeEnum.EXTERNAL;
                                    }}),
                                    add(new EstimationCreateAttachmentApiModel() {{
                                        link = "occaecati";
                                        obfuscatedFileName = "enim";
                                        originalFileName = "accusamus";
                                        size = 965417L;
                                        type = EstimationCreateAttachmentApiModelTypeEnum.UPLOADED;
                                    }}),
                                }};
                                clientId = 588465;
                                clonedFromId = 725255;
                                currencyId = 659669;
                                expiresOn = OffsetDateTime.parse("2021-12-07T18:13:34.827Z");
                                issuedOn = OffsetDateTime.parse("2022-04-23T13:35:30.978Z");
                                items = new org.openapis.openapi.models.shared.EstimationCreateItemApiModel[]{{
                                    add(new EstimationCreateItemApiModel() {{
                                        cost = 3948.69;
                                        description = "vel";
                                        discountPercentage = 6188.09;
                                        quantity = 6063.93;
                                        taxId = 474867;
                                        taxPercentage = 191.93;
                                        workTypeId = 470132;
                                    }}),
                                    add(new EstimationCreateItemApiModel() {{
                                        cost = 3015.75;
                                        description = "distinctio";
                                        discountPercentage = 6601.74;
                                        quantity = 2879.91;
                                        taxId = 290077;
                                        taxPercentage = 3834.62;
                                        workTypeId = 618016;
                                    }}),
                                    add(new EstimationCreateItemApiModel() {{
                                        cost = 7491.7;
                                        description = "eum";
                                        discountPercentage = 8784.53;
                                        quantity = 1354.74;
                                        taxId = 102863;
                                        taxPercentage = 2982.82;
                                        workTypeId = 92373;
                                    }}),
                                }};
                                notes = "excepturi";
                                number = "ullam";
                                paymentGateways = new org.openapis.openapi.models.shared.EstimationGatewayApiModel[]{{
                                    add(new EstimationGatewayApiModel() {{
                                        name = "Kirk Bartoletti";
                                    }}),
                                    add(new EstimationGatewayApiModel() {{
                                        name = "Tommy Kemmer";
                                    }}),
                                    add(new EstimationGatewayApiModel() {{
                                        name = "Vivian Boyle";
                                    }}),
                                }};
                                poNumber = "debitis";
                                status = EstimationCreateApiModelStatusEnum.DRAFT;
                                terms = "maxime";
                            }};, "deleniti", "facilis");            

            EstimationApiNewFormResponse res = sdk.estimation.estimationApiNewForm(req);

            if (res.estimationFullDetailsApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## estimationApiNewJson

Create an estimation

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EstimationApiNewJsonRequest;
import org.openapis.openapi.models.operations.EstimationApiNewJsonResponse;
import org.openapis.openapi.models.shared.EstimationCreateApiModel;
import org.openapis.openapi.models.shared.EstimationCreateApiModelStatusEnum;
import org.openapis.openapi.models.shared.EstimationCreateAttachmentApiModel;
import org.openapis.openapi.models.shared.EstimationCreateAttachmentApiModelTypeEnum;
import org.openapis.openapi.models.shared.EstimationCreateItemApiModel;
import org.openapis.openapi.models.shared.EstimationGatewayApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EstimationApiNewJsonRequest req = new EstimationApiNewJsonRequest(                new EstimationCreateApiModel() {{
                                attachments = new org.openapis.openapi.models.shared.EstimationCreateAttachmentApiModel[]{{
                                    add(new EstimationCreateAttachmentApiModel() {{
                                        link = "architecto";
                                        obfuscatedFileName = "architecto";
                                        originalFileName = "repudiandae";
                                        size = 352312L;
                                        type = EstimationCreateAttachmentApiModelTypeEnum.UPLOADED;
                                    }}),
                                    add(new EstimationCreateAttachmentApiModel() {{
                                        link = "nihil";
                                        obfuscatedFileName = "repellat";
                                        originalFileName = "quibusdam";
                                        size = 149448L;
                                        type = EstimationCreateAttachmentApiModelTypeEnum.UPLOADED;
                                    }}),
                                }};
                                clientId = 868126;
                                clonedFromId = 37559;
                                currencyId = 162493;
                                expiresOn = OffsetDateTime.parse("2021-10-08T15:23:46.576Z");
                                issuedOn = OffsetDateTime.parse("2022-11-16T19:20:12.159Z");
                                items = new org.openapis.openapi.models.shared.EstimationCreateItemApiModel[]{{
                                    add(new EstimationCreateItemApiModel() {{
                                        cost = 8480.09;
                                        description = "pariatur";
                                        discountPercentage = 8073.19;
                                        quantity = 4113.97;
                                        taxId = 569101;
                                        taxPercentage = 1399.72;
                                        workTypeId = 407183;
                                    }}),
                                    add(new EstimationCreateItemApiModel() {{
                                        cost = 332.22;
                                        description = "ab";
                                        discountPercentage = 9825.75;
                                        quantity = 6974.29;
                                        taxId = 373291;
                                        taxPercentage = 4535.43;
                                        workTypeId = 420075;
                                    }}),
                                    add(new EstimationCreateItemApiModel() {{
                                        cost = 7220.56;
                                        description = "eaque";
                                        discountPercentage = 8663.83;
                                        quantity = 3654.96;
                                        taxId = 975522;
                                        taxPercentage = 166.27;
                                        workTypeId = 855804;
                                    }}),
                                    add(new EstimationCreateItemApiModel() {{
                                        cost = 2307.42;
                                        description = "aut";
                                        discountPercentage = 7649.12;
                                        quantity = 3599.78;
                                        taxId = 944124;
                                        taxPercentage = 7299.91;
                                        workTypeId = 749999;
                                    }}),
                                }};
                                notes = "dolores";
                                number = "quis";
                                paymentGateways = new org.openapis.openapi.models.shared.EstimationGatewayApiModel[]{{
                                    add(new EstimationGatewayApiModel() {{
                                        name = "Cynthia Hayes";
                                    }}),
                                    add(new EstimationGatewayApiModel() {{
                                        name = "Jacqueline Schimmel";
                                    }}),
                                    add(new EstimationGatewayApiModel() {{
                                        name = "Dean Welch";
                                    }}),
                                }};
                                poNumber = "facilis";
                                status = EstimationCreateApiModelStatusEnum.ACCEPTED;
                                terms = "voluptatem";
                            }};, "porro", "consequuntur");            

            EstimationApiNewJsonResponse res = sdk.estimation.estimationApiNewJson(req);

            if (res.estimationFullDetailsApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## estimationApiNewRaw

Create an estimation

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EstimationApiNewRawRequest;
import org.openapis.openapi.models.operations.EstimationApiNewRawResponse;
import org.openapis.openapi.models.shared.EstimationCreateApiModel;
import org.openapis.openapi.models.shared.EstimationCreateApiModelStatusEnum;
import org.openapis.openapi.models.shared.EstimationCreateAttachmentApiModel;
import org.openapis.openapi.models.shared.EstimationCreateAttachmentApiModelTypeEnum;
import org.openapis.openapi.models.shared.EstimationCreateItemApiModel;
import org.openapis.openapi.models.shared.EstimationGatewayApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EstimationApiNewRawRequest req = new EstimationApiNewRawRequest("blanditiis".getBytes(), "error", "eaque");            

            EstimationApiNewRawResponse res = sdk.estimation.estimationApiNewRaw(req);

            if (res.estimationFullDetailsApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## estimationApiSendToClientForm

Send the provided estimation to the client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EstimationApiSendToClientFormRequest;
import org.openapis.openapi.models.operations.EstimationApiSendToClientFormResponse;
import org.openapis.openapi.models.shared.SendEstimationToClientApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EstimationApiSendToClientFormRequest req = new EstimationApiSendToClientFormRequest(                new SendEstimationToClientApiModel() {{
                                attachPdf = false;
                                estimationId = 577229;
                                id = 699098;
                                message = "adipisci";
                                sendToSelf = false;
                                subject = "asperiores";
                            }};, "earum", "modi");            

            EstimationApiSendToClientFormResponse res = sdk.estimation.estimationApiSendToClientForm(req);

            if (res.estimationApiSendToClientForm200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## estimationApiSendToClientJson

Send the provided estimation to the client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EstimationApiSendToClientJsonRequest;
import org.openapis.openapi.models.operations.EstimationApiSendToClientJsonResponse;
import org.openapis.openapi.models.shared.SendEstimationToClientApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EstimationApiSendToClientJsonRequest req = new EstimationApiSendToClientJsonRequest(                new SendEstimationToClientApiModel() {{
                                attachPdf = false;
                                estimationId = 613966;
                                id = 679091;
                                message = "deleniti";
                                sendToSelf = false;
                                subject = "pariatur";
                            }};, "provident", "nobis");            

            EstimationApiSendToClientJsonResponse res = sdk.estimation.estimationApiSendToClientJson(req);

            if (res.estimationApiSendToClientJSON200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## estimationApiSendToClientRaw

Send the provided estimation to the client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EstimationApiSendToClientRawRequest;
import org.openapis.openapi.models.operations.EstimationApiSendToClientRawResponse;
import org.openapis.openapi.models.shared.SendEstimationToClientApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EstimationApiSendToClientRawRequest req = new EstimationApiSendToClientRawRequest("libero".getBytes(), "delectus", "quaerat");            

            EstimationApiSendToClientRawResponse res = sdk.estimation.estimationApiSendToClientRaw(req);

            if (res.estimationApiSendToClientRaw200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## estimationApiStatus

Retrieve the status of the estimation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EstimationApiStatusRequest;
import org.openapis.openapi.models.operations.EstimationApiStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EstimationApiStatusRequest req = new EstimationApiStatusRequest(554242, "aliquid", "dolorem");            

            EstimationApiStatusResponse res = sdk.estimation.estimationApiStatus(req);

            if (res.estimationApiStatus200ApplicationJSONStringEnum != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## estimationApiUpdateForm

Update an existing estimation

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EstimationApiUpdateFormRequest;
import org.openapis.openapi.models.operations.EstimationApiUpdateFormResponse;
import org.openapis.openapi.models.shared.EstimationGatewayApiModel;
import org.openapis.openapi.models.shared.EstimationUpdateApiModel;
import org.openapis.openapi.models.shared.EstimationUpdateApiModelStatusEnum;
import org.openapis.openapi.models.shared.EstimationUpdateAttachmentApiModel;
import org.openapis.openapi.models.shared.EstimationUpdateAttachmentApiModelTypeEnum;
import org.openapis.openapi.models.shared.EstimationUpdateItemApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EstimationApiUpdateFormRequest req = new EstimationApiUpdateFormRequest(                new EstimationUpdateApiModel() {{
                                attachments = new org.openapis.openapi.models.shared.EstimationUpdateAttachmentApiModel[]{{
                                    add(new EstimationUpdateAttachmentApiModel() {{
                                        id = 222443;
                                        link = "qui";
                                        obfuscatedFileName = "ipsum";
                                        originalFileName = "hic";
                                        size = 569574L;
                                        type = EstimationUpdateAttachmentApiModelTypeEnum.UPLOADED;
                                    }}),
                                }};
                                clientId = 452109;
                                clonedFromId = 490459;
                                currencyId = 970237;
                                expiresOn = OffsetDateTime.parse("2022-04-27T14:25:42.204Z");
                                id = 254356;
                                issuedOn = OffsetDateTime.parse("2022-12-10T19:39:51.391Z");
                                items = new org.openapis.openapi.models.shared.EstimationUpdateItemApiModel[]{{
                                    add(new EstimationUpdateItemApiModel() {{
                                        cost = 4344.17;
                                        description = "odio";
                                        discountPercentage = 3117.96;
                                        id = 881005;
                                        quantity = 6963.44;
                                        taxId = 976405;
                                        taxPercentage = 3777.52;
                                        workTypeId = 617658;
                                    }}),
                                }};
                                notes = "eos";
                                number = "atque";
                                paymentGateways = new org.openapis.openapi.models.shared.EstimationGatewayApiModel[]{{
                                    add(new EstimationGatewayApiModel() {{
                                        name = "Stephen Roberts";
                                    }}),
                                }};
                                poNumber = "voluptate";
                                status = EstimationUpdateApiModelStatusEnum.REJECTED;
                                terms = "deleniti";
                            }};, "omnis", "necessitatibus");            

            EstimationApiUpdateFormResponse res = sdk.estimation.estimationApiUpdateForm(req);

            if (res.estimationFullDetailsApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## estimationApiUpdateJson

Update an existing estimation

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EstimationApiUpdateJsonRequest;
import org.openapis.openapi.models.operations.EstimationApiUpdateJsonResponse;
import org.openapis.openapi.models.shared.EstimationGatewayApiModel;
import org.openapis.openapi.models.shared.EstimationUpdateApiModel;
import org.openapis.openapi.models.shared.EstimationUpdateApiModelStatusEnum;
import org.openapis.openapi.models.shared.EstimationUpdateAttachmentApiModel;
import org.openapis.openapi.models.shared.EstimationUpdateAttachmentApiModelTypeEnum;
import org.openapis.openapi.models.shared.EstimationUpdateItemApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EstimationApiUpdateJsonRequest req = new EstimationApiUpdateJsonRequest(                new EstimationUpdateApiModel() {{
                                attachments = new org.openapis.openapi.models.shared.EstimationUpdateAttachmentApiModel[]{{
                                    add(new EstimationUpdateAttachmentApiModel() {{
                                        id = 990339;
                                        link = "nihil";
                                        obfuscatedFileName = "ipsum";
                                        originalFileName = "voluptate";
                                        size = 663078L;
                                        type = EstimationUpdateAttachmentApiModelTypeEnum.UPLOADED;
                                    }}),
                                    add(new EstimationUpdateAttachmentApiModel() {{
                                        id = 263322;
                                        link = "aspernatur";
                                        obfuscatedFileName = "perferendis";
                                        originalFileName = "amet";
                                        size = 758379L;
                                        type = EstimationUpdateAttachmentApiModelTypeEnum.UPLOADED;
                                    }}),
                                    add(new EstimationUpdateAttachmentApiModel() {{
                                        id = 320017;
                                        link = "saepe";
                                        obfuscatedFileName = "suscipit";
                                        originalFileName = "deserunt";
                                        size = 588317L;
                                        type = EstimationUpdateAttachmentApiModelTypeEnum.EXTERNAL;
                                    }}),
                                }};
                                clientId = 831049;
                                clonedFromId = 519711;
                                currencyId = 628982;
                                expiresOn = OffsetDateTime.parse("2022-02-16T11:34:48.736Z");
                                id = 311860;
                                issuedOn = OffsetDateTime.parse("2022-07-29T17:02:39.743Z");
                                items = new org.openapis.openapi.models.shared.EstimationUpdateItemApiModel[]{{
                                    add(new EstimationUpdateItemApiModel() {{
                                        cost = 8853.38;
                                        description = "qui";
                                        discountPercentage = 6798.8;
                                        id = 952792;
                                        quantity = 4561.3;
                                        taxId = 687488;
                                        taxPercentage = 4834.09;
                                        workTypeId = 215507;
                                    }}),
                                    add(new EstimationUpdateItemApiModel() {{
                                        cost = 7887.4;
                                        description = "tenetur";
                                        discountPercentage = 2294.42;
                                        id = 730856;
                                        quantity = 8802.98;
                                        taxId = 253941;
                                        taxPercentage = 3136.92;
                                        workTypeId = 213312;
                                    }}),
                                    add(new EstimationUpdateItemApiModel() {{
                                        cost = 9574.51;
                                        description = "totam";
                                        discountPercentage = 4717.52;
                                        id = 25662;
                                        quantity = 7115.84;
                                        taxId = 207470;
                                        taxPercentage = 1536.94;
                                        workTypeId = 424685;
                                    }}),
                                    add(new EstimationUpdateItemApiModel() {{
                                        cost = 7304.42;
                                        description = "voluptas";
                                        discountPercentage = 6462.65;
                                        id = 463575;
                                        quantity = 2148.8;
                                        taxId = 277628;
                                        taxPercentage = 1864.58;
                                        workTypeId = 586784;
                                    }}),
                                }};
                                notes = "maxime";
                                number = "pariatur";
                                paymentGateways = new org.openapis.openapi.models.shared.EstimationGatewayApiModel[]{{
                                    add(new EstimationGatewayApiModel() {{
                                        name = "Kayla Larson";
                                    }}),
                                    add(new EstimationGatewayApiModel() {{
                                        name = "Verna Purdy";
                                    }}),
                                    add(new EstimationGatewayApiModel() {{
                                        name = "Marty Deckow";
                                    }}),
                                }};
                                poNumber = "magni";
                                status = EstimationUpdateApiModelStatusEnum.ACCEPTED;
                                terms = "sunt";
                            }};, "ullam", "nam");            

            EstimationApiUpdateJsonResponse res = sdk.estimation.estimationApiUpdateJson(req);

            if (res.estimationFullDetailsApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## estimationApiUpdateRaw

Update an existing estimation

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EstimationApiUpdateRawRequest;
import org.openapis.openapi.models.operations.EstimationApiUpdateRawResponse;
import org.openapis.openapi.models.shared.EstimationGatewayApiModel;
import org.openapis.openapi.models.shared.EstimationUpdateApiModel;
import org.openapis.openapi.models.shared.EstimationUpdateApiModelStatusEnum;
import org.openapis.openapi.models.shared.EstimationUpdateAttachmentApiModel;
import org.openapis.openapi.models.shared.EstimationUpdateAttachmentApiModelTypeEnum;
import org.openapis.openapi.models.shared.EstimationUpdateItemApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EstimationApiUpdateRawRequest req = new EstimationApiUpdateRawRequest("hic".getBytes(), "voluptatem", "cumque");            

            EstimationApiUpdateRawResponse res = sdk.estimation.estimationApiUpdateRaw(req);

            if (res.estimationFullDetailsApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## estimationApiUri

Return the unique url to the client's invoice

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EstimationApiUriRequest;
import org.openapis.openapi.models.operations.EstimationApiUriResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EstimationApiUriRequest req = new EstimationApiUriRequest(746994, "nobis", "et");            

            EstimationApiUriResponse res = sdk.estimation.estimationApiUri(req);

            if (res.estimationUriApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
