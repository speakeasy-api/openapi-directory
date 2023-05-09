# SDK

## Overview

Provides AWS Marketplace business intelligence data on-demand.

Amazon Web Services documentation
<https://docs.aws.amazon.com/marketplacecommerceanalytics/>
### Available Operations

* [GenerateDataSet](#generatedataset) - Given a data set type and data set publication date, asynchronously publishes the requested data set to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.
* [StartSupportDataExport](#startsupportdataexport) - Given a data set type and a from date, asynchronously publishes the requested customer support data to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD'T'HH-mm-ss'Z'.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.

## GenerateDataSet

Given a data set type and data set publication date, asynchronously publishes the requested data set to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.

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
    res, err := s.SDK.GenerateDataSet(ctx, operations.GenerateDataSetRequest{
        GenerateDataSetRequest: shared.GenerateDataSetRequest{
            CustomerDefinedValues: map[string]string{
                "voluptatum": "iusto",
                "excepturi": "nisi",
                "recusandae": "temporibus",
                "ab": "quis",
            },
            DataSetPublicationDate: types.MustTimeFromString("2022-05-09T10:00:51.349Z"),
            DataSetType: shared.DataSetTypeEnumCustomerSubscriberHourlyMonthlySubscriptions,
            DestinationS3BucketName: "ipsam",
            DestinationS3Prefix: sdk.String("repellendus"),
            RoleNameArn: "sapiente",
            SnsTopicArn: "quo",
        },
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("quod"),
        XAmzTarget: operations.GenerateDataSetXAmzTargetEnumMarketplaceCommerceAnalytics20150701GenerateDataSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateDataSetResult != nil {
        // handle response
    }
}
```

## StartSupportDataExport

Given a data set type and a from date, asynchronously publishes the requested customer support data to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD'T'HH-mm-ss'Z'.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.

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
    res, err := s.SDK.StartSupportDataExport(ctx, operations.StartSupportDataExportRequest{
        StartSupportDataExportRequest: shared.StartSupportDataExportRequest{
            CustomerDefinedValues: map[string]string{
                "totam": "porro",
                "dolorum": "dicta",
            },
            DataSetType: shared.SupportDataSetTypeEnumTestCustomerSupportContactsData,
            DestinationS3BucketName: "officia",
            DestinationS3Prefix: sdk.String("occaecati"),
            FromDate: types.MustTimeFromString("2022-06-18T20:36:37.412Z"),
            RoleNameArn: "hic",
            SnsTopicArn: "optio",
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("beatae"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.StartSupportDataExportXAmzTargetEnumMarketplaceCommerceAnalytics20150701StartSupportDataExport,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartSupportDataExportResult != nil {
        // handle response
    }
}
```
