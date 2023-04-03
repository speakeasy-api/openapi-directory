# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/pi/2018-02-27/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.DescribeDimensionKeysRequest{
        DescribeDimensionKeysRequest: shared.DescribeDimensionKeysRequest{
            AdditionalMetrics: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
            EndTime: "2021-04-14T16:47:33.722Z",
            Filter: map[string]string{
                "illum": "vel",
                "error": "deserunt",
                "suscipit": "iure",
            },
            GroupBy: shared.DimensionGroup{
                Dimensions: []string{
                    "debitis",
                    "ipsa",
                },
                Group: "delectus",
                Limit: 272656,
            },
            Identifier: "suscipit",
            MaxResults: 477665,
            Metric: "minus",
            NextToken: "placeat",
            PartitionBy: &shared.DimensionGroup{
                Dimensions: []string{
                    "iusto",
                    "excepturi",
                    "nisi",
                },
                Group: "recusandae",
                Limit: 836079,
            },
            PeriodInSeconds: 71036,
            ServiceType: "RDS",
            StartTime: "2022-05-09T10:00:51.349Z",
        },
        MaxResults: "perferendis",
        NextToken: "ipsam",
        XAmzAlgorithm: "repellendus",
        XAmzContentSha256: "sapiente",
        XAmzCredential: "quo",
        XAmzDate: "odit",
        XAmzSecurityToken: "at",
        XAmzSignature: "at",
        XAmzSignedHeaders: "maiores",
        XAmzTarget: "PerformanceInsightsv20180227.DescribeDimensionKeys",
    }

    ctx := context.Background()
    res, err := s.DescribeDimensionKeys(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDimensionKeysResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `DescribeDimensionKeys` - <p>For a specific time period, retrieve the top <code>N</code> dimension keys for a metric. </p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>
* `GetDimensionKeyDetails` - Get the attributes of the specified dimension group for a DB instance or data source. For example, if you specify a SQL ID, <code>GetDimensionKeyDetails</code> retrieves the full text of the dimension <code>db.sql.statement</code> associated with this ID. This operation is useful because <code>GetResourceMetrics</code> and <code>DescribeDimensionKeys</code> don't support retrieval of large SQL statement text.
* `GetResourceMetadata` - Retrieve the metadata for different features. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance. 
* `GetResourceMetrics` - <p>Retrieve Performance Insights metrics for a set of data sources over a time period. You can provide specific dimension groups and dimensions, and provide aggregation and filtering criteria for each group.</p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>
* `ListAvailableResourceDimensions` - Retrieve the dimensions that can be queried for each specified metric type on a specified DB instance.
* `ListAvailableResourceMetrics` - Retrieve metrics of the specified types that can be queried for a specified DB instance. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
