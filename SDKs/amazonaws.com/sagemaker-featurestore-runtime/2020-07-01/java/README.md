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
import org.openapis.openapi.models.operations.BatchGetRecordRequest;
import org.openapis.openapi.models.operations.BatchGetRecordRequestBody;
import org.openapis.openapi.models.operations.BatchGetRecordResponse;
import org.openapis.openapi.models.shared.BatchGetRecordIdentifier;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetRecordRequest req = new BatchGetRecordRequest(                new BatchGetRecordRequestBody(                new org.openapis.openapi.models.shared.BatchGetRecordIdentifier[]{{
                                                add(new BatchGetRecordIdentifier("suscipit",                 new String[]{{
                                                                    add("magnam"),
                                                                    add("debitis"),
                                                                }}) {{
                                                    featureGroupName = "distinctio";
                                                    featureNames = new String[]{{
                                                        add("unde"),
                                                        add("nulla"),
                                                        add("corrupti"),
                                                        add("illum"),
                                                    }};
                                                    recordIdentifiersValueAsString = new String[]{{
                                                        add("error"),
                                                        add("deserunt"),
                                                    }};
                                                }}),
                                                add(new BatchGetRecordIdentifier("recusandae",                 new String[]{{
                                                                    add("ab"),
                                                                    add("quis"),
                                                                    add("veritatis"),
                                                                    add("deserunt"),
                                                                }}) {{
                                                    featureGroupName = "ipsa";
                                                    featureNames = new String[]{{
                                                        add("tempora"),
                                                        add("suscipit"),
                                                        add("molestiae"),
                                                        add("minus"),
                                                    }};
                                                    recordIdentifiersValueAsString = new String[]{{
                                                        add("voluptatum"),
                                                        add("iusto"),
                                                        add("excepturi"),
                                                        add("nisi"),
                                                    }};
                                                }}),
                                                add(new BatchGetRecordIdentifier("molestiae",                 new String[]{{
                                                                    add("quod"),
                                                                    add("esse"),
                                                                    add("totam"),
                                                                    add("porro"),
                                                                }}) {{
                                                    featureGroupName = "perferendis";
                                                    featureNames = new String[]{{
                                                        add("repellendus"),
                                                        add("sapiente"),
                                                    }};
                                                    recordIdentifiersValueAsString = new String[]{{
                                                        add("odit"),
                                                        add("at"),
                                                        add("at"),
                                                        add("maiores"),
                                                    }};
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "nam";
                xAmzDate = "officia";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "deleniti";
            }};            

            BatchGetRecordResponse res = sdk.batchGetRecord(req);

            if (res.batchGetRecordResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [batchGetRecord](docs/sdk/README.md#batchgetrecord) - Retrieves a batch of <code>Records</code> from a <code>FeatureGroup</code>.
* [deleteRecord](docs/sdk/README.md#deleterecord) - <p>Deletes a <code>Record</code> from a <code>FeatureGroup</code> in the <code>OnlineStore</code>. Feature Store supports both <code>SOFT_DELETE</code> and <code>HARD_DELETE</code>. For <code>SOFT_DELETE</code> (default), feature columns are set to <code>null</code> and the record is no longer retrievable by <code>GetRecord</code> or <code>BatchGetRecord</code>. For<code> HARD_DELETE</code>, the complete <code>Record</code> is removed from the <code>OnlineStore</code>. In both cases, Feature Store appends the deleted record marker to the <code>OfflineStore</code> with feature values set to <code>null</code>, <code>is_deleted</code> value set to <code>True</code>, and <code>EventTime</code> set to the delete input <code>EventTime</code>.</p> <p>Note that the <code>EventTime</code> specified in <code>DeleteRecord</code> should be set later than the <code>EventTime</code> of the existing record in the <code>OnlineStore</code> for that <code>RecordIdentifer</code>. If it is not, the deletion does not occur:</p> <ul> <li> <p>For <code>SOFT_DELETE</code>, the existing (undeleted) record remains in the <code>OnlineStore</code>, though the delete record marker is still written to the <code>OfflineStore</code>.</p> </li> <li> <p> <code>HARD_DELETE</code> returns <code>EventTime</code>: <code>400 ValidationException</code> to indicate that the delete operation failed. No delete record marker is written to the <code>OfflineStore</code>.</p> </li> </ul>
* [getRecord](docs/sdk/README.md#getrecord) - Use for <code>OnlineStore</code> serving from a <code>FeatureStore</code>. Only the latest records stored in the <code>OnlineStore</code> can be retrieved. If no Record with <code>RecordIdentifierValue</code> is found, then an empty result is returned. 
* [putRecord](docs/sdk/README.md#putrecord) - Used for data ingestion into the <code>FeatureStore</code>. The <code>PutRecord</code> API writes to both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the record is the latest record for the <code>recordIdentifier</code>, the record is written to both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the record is a historic record, it is written only to the <code>OfflineStore</code>.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
