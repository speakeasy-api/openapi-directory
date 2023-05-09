# SDK

## Overview

<p>The AWS Cost and Usage Report API enables you to programmatically create, query, and delete AWS Cost and Usage report definitions.</p> <p>AWS Cost and Usage reports track the monthly AWS costs and usage associated with your AWS account. The report contains line items for each unique combination of AWS product, usage type, and operation that your AWS account uses. You can configure the AWS Cost and Usage report to show only the data that you want, using the AWS Cost and Usage API.</p> <p>Service Endpoint</p> <p>The AWS Cost and Usage Report API provides the following endpoint:</p> <ul> <li> <p>cur.us-east-1.amazonaws.com</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/cur/>
### Available Operations

* [DeleteReportDefinition](#deletereportdefinition) - Deletes the specified report.
* [DescribeReportDefinitions](#describereportdefinitions) - Lists the AWS Cost and Usage reports available to this account.
* [ModifyReportDefinition](#modifyreportdefinition) - Allows you to programatically update your report preferences.
* [PutReportDefinition](#putreportdefinition) - Creates a new report using the description that you provide.

## DeleteReportDefinition

Deletes the specified report.

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
    res, err := s.SDK.DeleteReportDefinition(ctx, operations.DeleteReportDefinitionRequest{
        DeleteReportDefinitionRequest: shared.DeleteReportDefinitionRequest{
            ReportName: sdk.String("vel"),
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.DeleteReportDefinitionXAmzTargetEnumAwsOrigamiServiceGatewayServiceDeleteReportDefinition,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteReportDefinitionResponse != nil {
        // handle response
    }
}
```

## DescribeReportDefinitions

Lists the AWS Cost and Usage reports available to this account.

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
    res, err := s.SDK.DescribeReportDefinitions(ctx, operations.DescribeReportDefinitionsRequest{
        DescribeReportDefinitionsRequest: shared.DescribeReportDefinitionsRequest{
            MaxResults: sdk.Int64(963663),
            NextToken: sdk.String("tempora"),
        },
        MaxResults: sdk.String("suscipit"),
        NextToken: sdk.String("molestiae"),
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("placeat"),
        XAmzCredential: sdk.String("voluptatum"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        XAmzTarget: operations.DescribeReportDefinitionsXAmzTargetEnumAwsOrigamiServiceGatewayServiceDescribeReportDefinitions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeReportDefinitionsResponse != nil {
        // handle response
    }
}
```

## ModifyReportDefinition

Allows you to programatically update your report preferences.

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
    res, err := s.SDK.ModifyReportDefinition(ctx, operations.ModifyReportDefinitionRequest{
        ModifyReportDefinitionRequest: shared.ModifyReportDefinitionRequest{
            ReportDefinition: shared.ReportDefinition{
                AdditionalArtifacts: []shared.AdditionalArtifactEnum{
                    shared.AdditionalArtifactEnumRedshift,
                    shared.AdditionalArtifactEnumQuicksight,
                    shared.AdditionalArtifactEnumRedshift,
                    shared.AdditionalArtifactEnumQuicksight,
                },
                AdditionalSchemaElements: []shared.SchemaElementEnum{
                    shared.SchemaElementEnumResources,
                },
                BillingViewArn: sdk.String("ipsam"),
                Compression: shared.CompressionFormatEnumParquet,
                Format: shared.ReportFormatEnumParquet,
                RefreshClosedReports: sdk.Bool(false),
                ReportName: "quo",
                ReportVersioning: shared.ReportVersioningEnumCreateNewReport.ToPointer(),
                S3Bucket: "at",
                S3Prefix: "at",
                S3Region: shared.AWSRegionEnumCnNorthwest1,
                TimeUnit: shared.TimeUnitEnumDaily,
            },
            ReportName: "quod",
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("nam"),
        XAmzTarget: operations.ModifyReportDefinitionXAmzTargetEnumAwsOrigamiServiceGatewayServiceModifyReportDefinition,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ModifyReportDefinitionResponse != nil {
        // handle response
    }
}
```

## PutReportDefinition

Creates a new report using the description that you provide.

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
    res, err := s.SDK.PutReportDefinition(ctx, operations.PutReportDefinitionRequest{
        PutReportDefinitionRequest: shared.PutReportDefinitionRequest{
            ReportDefinition: shared.ReportDefinition{
                AdditionalArtifacts: []shared.AdditionalArtifactEnum{
                    shared.AdditionalArtifactEnumQuicksight,
                    shared.AdditionalArtifactEnumRedshift,
                    shared.AdditionalArtifactEnumQuicksight,
                },
                AdditionalSchemaElements: []shared.SchemaElementEnum{
                    shared.SchemaElementEnumResources,
                    shared.SchemaElementEnumResources,
                    shared.SchemaElementEnumResources,
                    shared.SchemaElementEnumResources,
                },
                BillingViewArn: sdk.String("optio"),
                Compression: shared.CompressionFormatEnumGzip,
                Format: shared.ReportFormatEnumTextORcsv,
                RefreshClosedReports: sdk.Bool(false),
                ReportName: "commodi",
                ReportVersioning: shared.ReportVersioningEnumCreateNewReport.ToPointer(),
                S3Bucket: "modi",
                S3Prefix: "qui",
                S3Region: shared.AWSRegionEnumUsEast1,
                TimeUnit: shared.TimeUnitEnumMonthly,
            },
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.PutReportDefinitionXAmzTargetEnumAwsOrigamiServiceGatewayServicePutReportDefinition,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutReportDefinitionResponse != nil {
        // handle response
    }
}
```
