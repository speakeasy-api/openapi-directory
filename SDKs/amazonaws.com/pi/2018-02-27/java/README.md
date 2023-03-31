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
import org.openapis.openapi.models.operations.DescribeDimensionKeysQueryParams;
import org.openapis.openapi.models.operations.DescribeDimensionKeysXAmzTargetEnum;
import org.openapis.openapi.models.operations.DescribeDimensionKeysHeaders;
import org.openapis.openapi.models.operations.DescribeDimensionKeysRequest;
import org.openapis.openapi.models.operations.DescribeDimensionKeysResponse;
import org.openapis.openapi.models.shared.DescribeDimensionKeysRequest;
import org.openapis.openapi.models.shared.ServiceTypeEnum;
import org.openapis.openapi.models.shared.DimensionGroup;

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

            DescribeDimensionKeysRequest req = new DescribeDimensionKeysRequest() {{
                queryParams = new DescribeDimensionKeysQueryParams() {{
                    maxResults = "corrupti";
                    nextToken = "provident";
                }};
                headers = new DescribeDimensionKeysHeaders() {{
                    xAmzAlgorithm = "distinctio";
                    xAmzContentSha256 = "quibusdam";
                    xAmzCredential = "unde";
                    xAmzDate = "nulla";
                    xAmzSecurityToken = "corrupti";
                    xAmzSignature = "illum";
                    xAmzSignedHeaders = "vel";
                    xAmzTarget = "PerformanceInsightsv20180227.DescribeDimensionKeys";
                }};
                request = new DescribeDimensionKeysRequest() {{
                    additionalMetrics = new String[]{{
                        add("deserunt"),
                        add("suscipit"),
                        add("iure"),
                    }};
                    endTime = "2022-02-09T12:04:06.508Z";
                    filter = new java.util.HashMap<String, String>() {{
                        put("delectus", "tempora");
                    }};
                    groupBy = new DimensionGroup() {{
                        dimensions = new String[]{{
                            add("molestiae"),
                            add("minus"),
                        }};
                        group = "placeat";
                        limit = 528895;
                    }};
                    identifier = "iusto";
                    maxResults = 568045;
                    metric = "nisi";
                    nextToken = "recusandae";
                    partitionBy = new DimensionGroup() {{
                        dimensions = new String[]{{
                            add("ab"),
                            add("quis"),
                            add("veritatis"),
                            add("deserunt"),
                        }};
                        group = "perferendis";
                        limit = 368241;
                    }};
                    periodInSeconds = 832620;
                    serviceType = "DOCDB";
                    startTime = "2022-07-31T07:34:52.790Z";
                }};
            }};            

            DescribeDimensionKeysResponse res = sdk.describeDimensionKeys(req);

            if (res.describeDimensionKeysResponse.isPresent()) {
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

* `describeDimensionKeys` - <p>For a specific time period, retrieve the top <code>N</code> dimension keys for a metric. </p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>
* `getDimensionKeyDetails` - Get the attributes of the specified dimension group for a DB instance or data source. For example, if you specify a SQL ID, <code>GetDimensionKeyDetails</code> retrieves the full text of the dimension <code>db.sql.statement</code> associated with this ID. This operation is useful because <code>GetResourceMetrics</code> and <code>DescribeDimensionKeys</code> don't support retrieval of large SQL statement text.
* `getResourceMetadata` - Retrieve the metadata for different features. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance. 
* `getResourceMetrics` - <p>Retrieve Performance Insights metrics for a set of data sources over a time period. You can provide specific dimension groups and dimensions, and provide aggregation and filtering criteria for each group.</p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>
* `listAvailableResourceDimensions` - Retrieve the dimensions that can be queried for each specified metric type on a specified DB instance.
* `listAvailableResourceMetrics` - Retrieve metrics of the specified types that can be queried for a specified DB instance. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
