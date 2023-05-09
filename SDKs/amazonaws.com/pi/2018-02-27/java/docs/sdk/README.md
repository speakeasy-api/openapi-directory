# SDK

## Overview

<fullname>Amazon RDS Performance Insights</fullname> <p>Amazon RDS Performance Insights enables you to monitor and explore different dimensions of database load based on data captured from a running DB instance. The guide provides detailed information about Performance Insights data types, parameters and errors.</p> <p>When Performance Insights is enabled, the Amazon RDS Performance Insights API provides visibility into the performance of your DB instance. Amazon CloudWatch provides the authoritative source for Amazon Web Services service-vended monitoring metrics. Performance Insights offers a domain-specific view of DB load.</p> <p>DB load is measured as average active sessions. Performance Insights provides the data to API consumers as a two-dimensional time-series dataset. The time dimension provides DB load data for each time point in the queried time range. Each time point decomposes overall load in relation to the requested dimensions, measured at that time point. Examples include SQL, Wait event, User, and Host.</p> <ul> <li> <p>To learn more about Performance Insights and Amazon Aurora DB instances, go to the <i> <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.html"> Amazon Aurora User Guide</a> </i>. </p> </li> <li> <p>To learn more about Performance Insights and Amazon RDS DB instances, go to the <i> <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html"> Amazon RDS User Guide</a> </i>. </p> </li> <li> <p>To learn more about Performance Insights and Amazon DocumentDB clusters, go to the <i> <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/performance-insights.html"> Amazon DocumentDB Developer Guide</a> </i>.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/pi/>
### Available Operations

* [describeDimensionKeys](#describedimensionkeys) - <p>For a specific time period, retrieve the top <code>N</code> dimension keys for a metric. </p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>
* [getDimensionKeyDetails](#getdimensionkeydetails) - Get the attributes of the specified dimension group for a DB instance or data source. For example, if you specify a SQL ID, <code>GetDimensionKeyDetails</code> retrieves the full text of the dimension <code>db.sql.statement</code> associated with this ID. This operation is useful because <code>GetResourceMetrics</code> and <code>DescribeDimensionKeys</code> don't support retrieval of large SQL statement text.
* [getResourceMetadata](#getresourcemetadata) - Retrieve the metadata for different features. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance. 
* [getResourceMetrics](#getresourcemetrics) - <p>Retrieve Performance Insights metrics for a set of data sources over a time period. You can provide specific dimension groups and dimensions, and provide aggregation and filtering criteria for each group.</p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>
* [listAvailableResourceDimensions](#listavailableresourcedimensions) - Retrieve the dimensions that can be queried for each specified metric type on a specified DB instance.
* [listAvailableResourceMetrics](#listavailableresourcemetrics) - Retrieve metrics of the specified types that can be queried for a specified DB instance. 

## describeDimensionKeys

<p>For a specific time period, retrieve the top <code>N</code> dimension keys for a metric. </p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>

### Example Usage

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
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDimensionKeysRequest req = new DescribeDimensionKeysRequest(                new DescribeDimensionKeysRequest(OffsetDateTime.parse("2022-06-25T00:37:01.696Z"),                 new DimensionGroup("porro") {{
                                                dimensions = new String[]{{
                                                    add("dicta"),
                                                    add("nam"),
                                                    add("officia"),
                                                }};
                                                limit = 582020L;
                                            }};, "fugit", "deleniti", ServiceTypeEnum.DOCDB, OffsetDateTime.parse("2021-06-08T13:49:32.889Z")) {{
                                additionalMetrics = new String[]{{
                                    add("commodi"),
                                }};
                                filter = new java.util.HashMap<String, String>() {{
                                    put("modi", "qui");
                                    put("impedit", "cum");
                                }};
                                maxResults = 456150L;
                                nextToken = "ipsum";
                                partitionBy = new DimensionGroup("excepturi") {{
                                    dimensions = new String[]{{
                                        add("perferendis"),
                                    }};
                                    limit = 324141L;
                                }};;
                                periodInSeconds = 617636L;
                            }};, DescribeDimensionKeysXAmzTargetEnum.PERFORMANCE_INSIGHTSV20180227_DESCRIBE_DIMENSION_KEYS) {{
                maxResults = "sed";
                nextToken = "iste";
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "natus";
                xAmzCredential = "laboriosam";
                xAmzDate = "hic";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "in";
            }};            

            DescribeDimensionKeysResponse res = sdk.sdk.describeDimensionKeys(req);

            if (res.describeDimensionKeysResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDimensionKeyDetails

Get the attributes of the specified dimension group for a DB instance or data source. For example, if you specify a SQL ID, <code>GetDimensionKeyDetails</code> retrieves the full text of the dimension <code>db.sql.statement</code> associated with this ID. This operation is useful because <code>GetResourceMetrics</code> and <code>DescribeDimensionKeys</code> don't support retrieval of large SQL statement text.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDimensionKeyDetailsRequest;
import org.openapis.openapi.models.operations.GetDimensionKeyDetailsResponse;
import org.openapis.openapi.models.operations.GetDimensionKeyDetailsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetDimensionKeyDetailsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDimensionKeyDetailsRequest req = new GetDimensionKeyDetailsRequest(                new GetDimensionKeyDetailsRequest("iste", "iure", "saepe", ServiceTypeEnum.DOCDB) {{
                                requestedDimensions = new String[]{{
                                    add("ipsa"),
                                }};
                            }};, GetDimensionKeyDetailsXAmzTargetEnum.PERFORMANCE_INSIGHTSV20180227_GET_DIMENSION_KEY_DETAILS) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "est";
                xAmzCredential = "mollitia";
                xAmzDate = "laborum";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "corporis";
            }};            

            GetDimensionKeyDetailsResponse res = sdk.sdk.getDimensionKeyDetails(req);

            if (res.getDimensionKeyDetailsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourceMetadata

Retrieve the metadata for different features. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourceMetadataRequest;
import org.openapis.openapi.models.operations.GetResourceMetadataResponse;
import org.openapis.openapi.models.operations.GetResourceMetadataXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetResourceMetadataRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResourceMetadataRequest req = new GetResourceMetadataRequest(                new GetResourceMetadataRequest("nobis", ServiceTypeEnum.RDS);, GetResourceMetadataXAmzTargetEnum.PERFORMANCE_INSIGHTSV20180227_GET_RESOURCE_METADATA) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "minima";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "culpa";
            }};            

            GetResourceMetadataResponse res = sdk.sdk.getResourceMetadata(req);

            if (res.getResourceMetadataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourceMetrics

<p>Retrieve Performance Insights metrics for a set of data sources over a time period. You can provide specific dimension groups and dimensions, and provide aggregation and filtering criteria for each group.</p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourceMetricsRequest;
import org.openapis.openapi.models.operations.GetResourceMetricsResponse;
import org.openapis.openapi.models.operations.GetResourceMetricsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DimensionGroup;
import org.openapis.openapi.models.shared.GetResourceMetricsRequest;
import org.openapis.openapi.models.shared.MetricQuery;
import org.openapis.openapi.models.shared.PeriodAlignmentEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResourceMetricsRequest req = new GetResourceMetricsRequest(                new GetResourceMetricsRequest(OffsetDateTime.parse("2022-09-11T06:15:44.019Z"), "mollitia",                 new org.openapis.openapi.models.shared.MetricQuery[]{{
                                                add(new MetricQuery("laborum") {{
                                                    filter = new java.util.HashMap<String, String>() {{
                                                        put("consequuntur", "repellat");
                                                        put("mollitia", "occaecati");
                                                        put("numquam", "commodi");
                                                    }};
                                                    groupBy = new DimensionGroup("quis") {{
                                                        dimensions = new String[]{{
                                                            add("molestiae"),
                                                            add("velit"),
                                                        }};
                                                        group = "error";
                                                        limit = 158969L;
                                                    }};
                                                    metric = "vitae";
                                                }}),
                                            }}, ServiceTypeEnum.DOCDB, OffsetDateTime.parse("2022-11-11T13:31:01.643Z")) {{
                                maxResults = 778346L;
                                nextToken = "sequi";
                                periodAlignment = PeriodAlignmentEnum.START_TIME;
                                periodInSeconds = 368725L;
                            }};, GetResourceMetricsXAmzTargetEnum.PERFORMANCE_INSIGHTSV20180227_GET_RESOURCE_METRICS) {{
                maxResults = "id";
                nextToken = "possimus";
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "error";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "reiciendis";
            }};            

            GetResourceMetricsResponse res = sdk.sdk.getResourceMetrics(req);

            if (res.getResourceMetricsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAvailableResourceDimensions

Retrieve the dimensions that can be queried for each specified metric type on a specified DB instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAvailableResourceDimensionsRequest;
import org.openapis.openapi.models.operations.ListAvailableResourceDimensionsResponse;
import org.openapis.openapi.models.operations.ListAvailableResourceDimensionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAvailableResourceDimensionsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAvailableResourceDimensionsRequest req = new ListAvailableResourceDimensionsRequest(                new ListAvailableResourceDimensionsRequest("vero",                 new String[]{{
                                                add("praesentium"),
                                                add("voluptatibus"),
                                            }}, ServiceTypeEnum.RDS) {{
                                maxResults = 604846L;
                                nextToken = "voluptate";
                            }};, ListAvailableResourceDimensionsXAmzTargetEnum.PERFORMANCE_INSIGHTSV20180227_LIST_AVAILABLE_RESOURCE_DIMENSIONS) {{
                maxResults = "cum";
                nextToken = "perferendis";
                xAmzAlgorithm = "doloremque";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "ut";
                xAmzDate = "maiores";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "dolore";
            }};            

            ListAvailableResourceDimensionsResponse res = sdk.sdk.listAvailableResourceDimensions(req);

            if (res.listAvailableResourceDimensionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAvailableResourceMetrics

Retrieve metrics of the specified types that can be queried for a specified DB instance. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAvailableResourceMetricsRequest;
import org.openapis.openapi.models.operations.ListAvailableResourceMetricsResponse;
import org.openapis.openapi.models.operations.ListAvailableResourceMetricsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAvailableResourceMetricsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAvailableResourceMetricsRequest req = new ListAvailableResourceMetricsRequest(                new ListAvailableResourceMetricsRequest("dicta",                 new String[]{{
                                                add("enim"),
                                                add("accusamus"),
                                                add("commodi"),
                                            }}, ServiceTypeEnum.DOCDB) {{
                                maxResults = 64147L;
                                nextToken = "ipsum";
                            }};, ListAvailableResourceMetricsXAmzTargetEnum.PERFORMANCE_INSIGHTSV20180227_LIST_AVAILABLE_RESOURCE_METRICS) {{
                maxResults = "quidem";
                nextToken = "molestias";
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "modi";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "rem";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "quasi";
            }};            

            ListAvailableResourceMetricsResponse res = sdk.sdk.listAvailableResourceMetrics(req);

            if (res.listAvailableResourceMetricsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
