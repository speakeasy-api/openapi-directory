# SDK

## Overview

<fullname>Amazon RDS Performance Insights</fullname> <p>Amazon RDS Performance Insights enables you to monitor and explore different dimensions of database load based on data captured from a running DB instance. The guide provides detailed information about Performance Insights data types, parameters and errors.</p> <p>When Performance Insights is enabled, the Amazon RDS Performance Insights API provides visibility into the performance of your DB instance. Amazon CloudWatch provides the authoritative source for Amazon Web Services service-vended monitoring metrics. Performance Insights offers a domain-specific view of DB load.</p> <p>DB load is measured as average active sessions. Performance Insights provides the data to API consumers as a two-dimensional time-series dataset. The time dimension provides DB load data for each time point in the queried time range. Each time point decomposes overall load in relation to the requested dimensions, measured at that time point. Examples include SQL, Wait event, User, and Host.</p> <ul> <li> <p>To learn more about Performance Insights and Amazon Aurora DB instances, go to the <i> <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.html"> Amazon Aurora User Guide</a> </i>. </p> </li> <li> <p>To learn more about Performance Insights and Amazon RDS DB instances, go to the <i> <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html"> Amazon RDS User Guide</a> </i>. </p> </li> <li> <p>To learn more about Performance Insights and Amazon DocumentDB clusters, go to the <i> <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/performance-insights.html"> Amazon DocumentDB Developer Guide</a> </i>.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/pi/>
### Available Operations

* [DescribeDimensionKeys](#describedimensionkeys) - <p>For a specific time period, retrieve the top <code>N</code> dimension keys for a metric. </p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>
* [GetDimensionKeyDetails](#getdimensionkeydetails) - Get the attributes of the specified dimension group for a DB instance or data source. For example, if you specify a SQL ID, <code>GetDimensionKeyDetails</code> retrieves the full text of the dimension <code>db.sql.statement</code> associated with this ID. This operation is useful because <code>GetResourceMetrics</code> and <code>DescribeDimensionKeys</code> don't support retrieval of large SQL statement text.
* [GetResourceMetadata](#getresourcemetadata) - Retrieve the metadata for different features. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance. 
* [GetResourceMetrics](#getresourcemetrics) - <p>Retrieve Performance Insights metrics for a set of data sources over a time period. You can provide specific dimension groups and dimensions, and provide aggregation and filtering criteria for each group.</p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>
* [ListAvailableResourceDimensions](#listavailableresourcedimensions) - Retrieve the dimensions that can be queried for each specified metric type on a specified DB instance.
* [ListAvailableResourceMetrics](#listavailableresourcemetrics) - Retrieve metrics of the specified types that can be queried for a specified DB instance. 

## DescribeDimensionKeys

<p>For a specific time period, retrieve the top <code>N</code> dimension keys for a metric. </p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeDimensionKeys(ctx, operations.DescribeDimensionKeysRequest{
        DescribeDimensionKeysRequest: shared.DescribeDimensionKeysRequest{
            AdditionalMetrics: []string{
                "quod",
                "quod",
            },
            EndTime: types.MustTimeFromString("2022-06-25T00:37:01.696Z"),
            Filter: map[string]string{
                "dolorum": "dicta",
                "nam": "officia",
                "occaecati": "fugit",
                "deleniti": "hic",
            },
            GroupBy: shared.DimensionGroup{
                Dimensions: []string{
                    "totam",
                    "beatae",
                    "commodi",
                    "molestiae",
                },
                Group: "modi",
                Limit: sdk.Int64(186332),
            },
            Identifier: "impedit",
            MaxResults: sdk.Int64(736918),
            Metric: "esse",
            NextToken: sdk.String("ipsum"),
            PartitionBy: &shared.DimensionGroup{
                Dimensions: []string{
                    "aspernatur",
                    "perferendis",
                    "ad",
                },
                Group: "natus",
                Limit: sdk.Int64(149675),
            },
            PeriodInSeconds: sdk.Int64(612096),
            ServiceType: shared.ServiceTypeEnumRds,
            StartTime: types.MustTimeFromString("2022-03-24T20:42:46.563Z"),
        },
        MaxResults: sdk.String("hic"),
        NextToken: sdk.String("saepe"),
        XAmzAlgorithm: sdk.String("fuga"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.DescribeDimensionKeysXAmzTargetEnumPerformanceInsightsv20180227DescribeDimensionKeys,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDimensionKeysResponse != nil {
        // handle response
    }
}
```

## GetDimensionKeyDetails

Get the attributes of the specified dimension group for a DB instance or data source. For example, if you specify a SQL ID, <code>GetDimensionKeyDetails</code> retrieves the full text of the dimension <code>db.sql.statement</code> associated with this ID. This operation is useful because <code>GetResourceMetrics</code> and <code>DescribeDimensionKeys</code> don't support retrieval of large SQL statement text.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDimensionKeyDetails(ctx, operations.GetDimensionKeyDetailsRequest{
        GetDimensionKeyDetailsRequest: shared.GetDimensionKeyDetailsRequest{
            Group: "architecto",
            GroupIdentifier: "ipsa",
            Identifier: "reiciendis",
            RequestedDimensions: []string{
                "mollitia",
                "laborum",
                "dolores",
            },
            ServiceType: shared.ServiceTypeEnumRds,
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("minima"),
        XAmzTarget: operations.GetDimensionKeyDetailsXAmzTargetEnumPerformanceInsightsv20180227GetDimensionKeyDetails,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDimensionKeyDetailsResponse != nil {
        // handle response
    }
}
```

## GetResourceMetadata

Retrieve the metadata for different features. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetResourceMetadata(ctx, operations.GetResourceMetadataRequest{
        GetResourceMetadataRequest: shared.GetResourceMetadataRequest{
            Identifier: "excepturi",
            ServiceType: shared.ServiceTypeEnumRds,
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.GetResourceMetadataXAmzTargetEnumPerformanceInsightsv20180227GetResourceMetadata,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResourceMetadataResponse != nil {
        // handle response
    }
}
```

## GetResourceMetrics

<p>Retrieve Performance Insights metrics for a set of data sources over a time period. You can provide specific dimension groups and dimensions, and provide aggregation and filtering criteria for each group.</p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetResourceMetrics(ctx, operations.GetResourceMetricsRequest{
        GetResourceMetricsRequest: shared.GetResourceMetricsRequest{
            EndTime: types.MustTimeFromString("2022-09-05T05:51:25.673Z"),
            Identifier: "repellat",
            MaxResults: sdk.Int64(653108),
            MetricQueries: []shared.MetricQuery{
                shared.MetricQuery{
                    Filter: map[string]string{
                        "commodi": "quam",
                        "molestiae": "velit",
                    },
                    GroupBy: &shared.DimensionGroup{
                        Dimensions: []string{
                            "quia",
                            "quis",
                            "vitae",
                        },
                        Group: "laborum",
                        Limit: sdk.Int64(656330),
                    },
                    Metric: "enim",
                },
                shared.MetricQuery{
                    Filter: map[string]string{
                        "quo": "sequi",
                    },
                    GroupBy: &shared.DimensionGroup{
                        Dimensions: []string{
                            "ipsam",
                            "id",
                            "possimus",
                            "aut",
                        },
                        Group: "quasi",
                        Limit: sdk.Int64(622846),
                    },
                    Metric: "temporibus",
                },
                shared.MetricQuery{
                    Filter: map[string]string{
                        "quasi": "reiciendis",
                        "voluptatibus": "vero",
                        "nihil": "praesentium",
                    },
                    GroupBy: &shared.DimensionGroup{
                        Dimensions: []string{
                            "ipsa",
                            "omnis",
                            "voluptate",
                            "cum",
                        },
                        Group: "perferendis",
                        Limit: sdk.Int64(39187),
                    },
                    Metric: "reprehenderit",
                },
            },
            NextToken: sdk.String("ut"),
            PeriodAlignment: shared.PeriodAlignmentEnumStartTime.ToPointer(),
            PeriodInSeconds: sdk.Int64(120196),
            ServiceType: shared.ServiceTypeEnumRds,
            StartTime: types.MustTimeFromString("2022-07-09T11:22:20.922Z"),
        },
        MaxResults: sdk.String("dicta"),
        NextToken: sdk.String("harum"),
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.GetResourceMetricsXAmzTargetEnumPerformanceInsightsv20180227GetResourceMetrics,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResourceMetricsResponse != nil {
        // handle response
    }
}
```

## ListAvailableResourceDimensions

Retrieve the dimensions that can be queried for each specified metric type on a specified DB instance.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListAvailableResourceDimensions(ctx, operations.ListAvailableResourceDimensionsRequest{
        ListAvailableResourceDimensionsRequest: shared.ListAvailableResourceDimensionsRequest{
            Identifier: "molestias",
            MaxResults: sdk.Int64(566602),
            Metrics: []string{
                "modi",
                "praesentium",
                "rem",
                "voluptates",
            },
            NextToken: sdk.String("quasi"),
            ServiceType: shared.ServiceTypeEnumDocdb,
        },
        MaxResults: sdk.String("sint"),
        NextToken: sdk.String("veritatis"),
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        XAmzTarget: operations.ListAvailableResourceDimensionsXAmzTargetEnumPerformanceInsightsv20180227ListAvailableResourceDimensions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAvailableResourceDimensionsResponse != nil {
        // handle response
    }
}
```

## ListAvailableResourceMetrics

Retrieve metrics of the specified types that can be queried for a specified DB instance. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListAvailableResourceMetrics(ctx, operations.ListAvailableResourceMetricsRequest{
        ListAvailableResourceMetricsRequest: shared.ListAvailableResourceMetricsRequest{
            Identifier: "deserunt",
            MaxResults: sdk.Int64(716327),
            MetricTypes: []string{
                "labore",
                "modi",
                "qui",
                "aliquid",
            },
            NextToken: sdk.String("cupiditate"),
            ServiceType: shared.ServiceTypeEnumDocdb,
        },
        MaxResults: sdk.String("perferendis"),
        NextToken: sdk.String("magni"),
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.ListAvailableResourceMetricsXAmzTargetEnumPerformanceInsightsv20180227ListAvailableResourceMetrics,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAvailableResourceMetricsResponse != nil {
        // handle response
    }
}
```
