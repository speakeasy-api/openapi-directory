# SDK

## Overview

<p>This reference provides descriptions of the AWS Application Cost Profiler API.</p> <p>The AWS Application Cost Profiler API provides programmatic access to view, create, update, and delete application cost report definitions, as well as to import your usage data into the Application Cost Profiler service.</p> <p>For more information about using this service, see the <a href="https://docs.aws.amazon.com/application-cost-profiler/latest/userguide/introduction.html">AWS Application Cost Profiler User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/application-cost-profiler/>
### Available Operations

* [DeleteReportDefinition](#deletereportdefinition) - Deletes the specified report definition in AWS Application Cost Profiler. This stops the report from being generated.
* [GetReportDefinition](#getreportdefinition) - Retrieves the definition of a report already configured in AWS Application Cost Profiler.
* [ImportApplicationUsage](#importapplicationusage) - <p>Ingests application usage data from Amazon Simple Storage Service (Amazon S3).</p> <p>The data must already exist in the S3 location. As part of the action, AWS Application Cost Profiler copies the object from your S3 bucket to an S3 bucket owned by Amazon for processing asynchronously.</p>
* [ListReportDefinitions](#listreportdefinitions) - <p>Retrieves a list of all reports and their configurations for your AWS account.</p> <p>The maximum number of reports is one.</p>
* [PutReportDefinition](#putreportdefinition) - Creates the report definition for a report in Application Cost Profiler.
* [UpdateReportDefinition](#updatereportdefinition) - Updates existing report in AWS Application Cost Profiler.

## DeleteReportDefinition

Deletes the specified report definition in AWS Application Cost Profiler. This stops the report from being generated.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteReportDefinition(ctx, operations.DeleteReportDefinitionRequest{
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("debitis"),
        ReportID: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteReportDefinitionResult != nil {
        // handle response
    }
}
```

## GetReportDefinition

Retrieves the definition of a report already configured in AWS Application Cost Profiler.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetReportDefinition(ctx, operations.GetReportDefinitionRequest{
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("placeat"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
        ReportID: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetReportDefinitionResult != nil {
        // handle response
    }
}
```

## ImportApplicationUsage

<p>Ingests application usage data from Amazon Simple Storage Service (Amazon S3).</p> <p>The data must already exist in the S3 location. As part of the action, AWS Application Cost Profiler copies the object from your S3 bucket to an S3 bucket owned by Amazon for processing asynchronously.</p>

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
    res, err := s.SDK.ImportApplicationUsage(ctx, operations.ImportApplicationUsageRequest{
        RequestBody: operations.ImportApplicationUsageRequestBody{
            SourceS3Location: operations.ImportApplicationUsageRequestBodySourceS3Location{
                Bucket: sdk.String("excepturi"),
                Key: sdk.String("nisi"),
                Region: shared.S3BucketRegionEnumAfSouth1.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("temporibus"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportApplicationUsageResult != nil {
        // handle response
    }
}
```

## ListReportDefinitions

<p>Retrieves a list of all reports and their configurations for your AWS account.</p> <p>The maximum number of reports is one.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListReportDefinitions(ctx, operations.ListReportDefinitionsRequest{
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("maiores"),
        MaxResults: sdk.Int64(473608),
        NextToken: sdk.String("quod"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReportDefinitionsResult != nil {
        // handle response
    }
}
```

## PutReportDefinition

Creates the report definition for a report in Application Cost Profiler.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutReportDefinition(ctx, operations.PutReportDefinitionRequest{
        RequestBody: operations.PutReportDefinitionRequestBody{
            DestinationS3Location: operations.PutReportDefinitionRequestBodyDestinationS3Location{
                Bucket: sdk.String("quod"),
                Prefix: sdk.String("esse"),
            },
            Format: operations.PutReportDefinitionRequestBodyFormatEnumParquet,
            ReportDescription: "porro",
            ReportFrequency: operations.PutReportDefinitionRequestBodyReportFrequencyEnumAll,
            ReportID: "dicta",
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("optio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutReportDefinitionResult != nil {
        // handle response
    }
}
```

## UpdateReportDefinition

Updates existing report in AWS Application Cost Profiler.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateReportDefinition(ctx, operations.UpdateReportDefinitionRequest{
        RequestBody: operations.UpdateReportDefinitionRequestBody{
            DestinationS3Location: operations.UpdateReportDefinitionRequestBodyDestinationS3Location{
                Bucket: sdk.String("totam"),
                Prefix: sdk.String("beatae"),
            },
            Format: operations.UpdateReportDefinitionRequestBodyFormatEnumCsv,
            ReportDescription: "molestiae",
            ReportFrequency: operations.UpdateReportDefinitionRequestBodyReportFrequencyEnumMonthly,
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        ReportID: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateReportDefinitionResult != nil {
        // handle response
    }
}
```
