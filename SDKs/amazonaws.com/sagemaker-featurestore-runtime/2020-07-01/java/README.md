# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchGetRecordHeaders;
import org.openapis.openapi.models.operations.BatchGetRecordRequestBody;
import org.openapis.openapi.models.operations.BatchGetRecordRequest;
import org.openapis.openapi.models.operations.BatchGetRecordResponse;
import org.openapis.openapi.models.shared.BatchGetRecordIdentifier;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            BatchGetRecordRequest req = new BatchGetRecordRequest() {{
                headers = new BatchGetRecordHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new BatchGetRecordRequestBody() {{
                    identifiers = new org.openapis.openapi.models.shared.BatchGetRecordIdentifier[]{{
                        add(new BatchGetRecordIdentifier() {{
                            featureGroupName = "vel";
                            featureNames = new String[]{{
                                add("deserunt"),
                                add("suscipit"),
                                add("iure"),
                            }};
                            recordIdentifiersValueAsString = new String[]{{
                                add("debitis"),
                                add("ipsa"),
                            }};
                        }}),
                        add(new BatchGetRecordIdentifier() {{
                            featureGroupName = "delectus";
                            featureNames = new String[]{{
                                add("suscipit"),
                                add("molestiae"),
                            }};
                            recordIdentifiersValueAsString = new String[]{{
                                add("placeat"),
                                add("voluptatum"),
                                add("iusto"),
                                add("excepturi"),
                            }};
                        }}),
                        add(new BatchGetRecordIdentifier() {{
                            featureGroupName = "nisi";
                            featureNames = new String[]{{
                                add("temporibus"),
                                add("ab"),
                                add("quis"),
                                add("veritatis"),
                            }};
                            recordIdentifiersValueAsString = new String[]{{
                                add("perferendis"),
                                add("ipsam"),
                                add("repellendus"),
                            }};
                        }}),
                        add(new BatchGetRecordIdentifier() {{
                            featureGroupName = "sapiente";
                            featureNames = new String[]{{
                                add("odit"),
                                add("at"),
                                add("at"),
                                add("maiores"),
                            }};
                            recordIdentifiersValueAsString = new String[]{{
                                add("quod"),
                                add("quod"),
                            }};
                        }}),
                    }};
                }};
            }};            

            BatchGetRecordResponse res = sdk.batchGetRecord(req);

            if (res.batchGetRecordResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `batchGetRecord` - Retrieves a batch of <code>Records</code> from a <code>FeatureGroup</code>.
* `deleteRecord` - Deletes a <code>Record</code> from a <code>FeatureGroup</code>. When the <code>DeleteRecord</code> API is called a new record will be added to the <code>OfflineStore</code> and the <code>Record</code> will be removed from the <code>OnlineStore</code>. This record will have a value of <code>True</code> in the <code>is_deleted</code> column.
* `getRecord` - Use for <code>OnlineStore</code> serving from a <code>FeatureStore</code>. Only the latest records stored in the <code>OnlineStore</code> can be retrieved. If no Record with <code>RecordIdentifierValue</code> is found, then an empty result is returned. 
* `putRecord` - Used for data ingestion into the <code>FeatureStore</code>. The <code>PutRecord</code> API writes to both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the record is the latest record for the <code>recordIdentifier</code>, the record is written to both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the record is a historic record, it is written only to the <code>OfflineStore</code>.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
