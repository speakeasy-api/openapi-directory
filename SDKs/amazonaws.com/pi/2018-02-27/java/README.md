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

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDimensionKeysRequest;
import org.openapis.openapi.models.operations.DescribeDimensionKeysResponse;
import org.openapis.openapi.models.operations.DescribeDimensionKeysXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDimensionKeysRequest;
import org.openapis.openapi.models.shared.DimensionGroup;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDimensionKeysRequest req = new DescribeDimensionKeysRequest(                new DescribeDimensionKeysRequest(OffsetDateTime.parse("2021-07-27T21:52:56.087Z"),                 new DimensionGroup("quibusdam") {{
                                                dimensions = new String[]{{
                                                    add("nulla"),
                                                    add("corrupti"),
                                                    add("illum"),
                                                }};
                                                limit = 423655L;
                                            }};, "error", "deserunt", ServiceTypeEnum.RDS, OffsetDateTime.parse("2022-09-14T09:35:47.986Z")) {{
                                additionalMetrics = new String[]{{
                                    add("ipsa"),
                                    add("delectus"),
                                    add("tempora"),
                                    add("suscipit"),
                                }};
                                filter = new java.util.HashMap<String, String>() {{
                                    put("minus", "placeat");
                                    put("voluptatum", "iusto");
                                }};
                                maxResults = 568045L;
                                nextToken = "nisi";
                                partitionBy = new DimensionGroup("recusandae") {{
                                    dimensions = new String[]{{
                                        add("ab"),
                                        add("quis"),
                                        add("veritatis"),
                                        add("deserunt"),
                                    }};
                                    limit = 20218L;
                                }};;
                                periodInSeconds = 368241L;
                            }};, DescribeDimensionKeysXAmzTargetEnum.PERFORMANCE_INSIGHTSV20180227_DESCRIBE_DIMENSION_KEYS) {{
                maxResults = "repellendus";
                nextToken = "sapiente";
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "odit";
                xAmzCredential = "at";
                xAmzDate = "at";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "quod";
            }};            

            DescribeDimensionKeysResponse res = sdk.describeDimensionKeys(req);

            if (res.describeDimensionKeysResponse != null) {
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

* [describeDimensionKeys](docs/sdk/README.md#describedimensionkeys) - <p>For a specific time period, retrieve the top <code>N</code> dimension keys for a metric. </p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>
* [getDimensionKeyDetails](docs/sdk/README.md#getdimensionkeydetails) - Get the attributes of the specified dimension group for a DB instance or data source. For example, if you specify a SQL ID, <code>GetDimensionKeyDetails</code> retrieves the full text of the dimension <code>db.sql.statement</code> associated with this ID. This operation is useful because <code>GetResourceMetrics</code> and <code>DescribeDimensionKeys</code> don't support retrieval of large SQL statement text.
* [getResourceMetadata](docs/sdk/README.md#getresourcemetadata) - Retrieve the metadata for different features. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance. 
* [getResourceMetrics](docs/sdk/README.md#getresourcemetrics) - <p>Retrieve Performance Insights metrics for a set of data sources over a time period. You can provide specific dimension groups and dimensions, and provide aggregation and filtering criteria for each group.</p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>
* [listAvailableResourceDimensions](docs/sdk/README.md#listavailableresourcedimensions) - Retrieve the dimensions that can be queried for each specified metric type on a specified DB instance.
* [listAvailableResourceMetrics](docs/sdk/README.md#listavailableresourcemetrics) - Retrieve metrics of the specified types that can be queried for a specified DB instance. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
