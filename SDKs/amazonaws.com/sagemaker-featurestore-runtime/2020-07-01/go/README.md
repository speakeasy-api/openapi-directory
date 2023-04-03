# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/sagemaker-featurestore-runtime/2020-07-01/go
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

    req := operations.BatchGetRecordRequest{
        RequestBody: operations.BatchGetRecordRequestBody{
            Identifiers: []shared.BatchGetRecordIdentifier{
                shared.BatchGetRecordIdentifier{
                    FeatureGroupName: "provident",
                    FeatureNames: []string{
                        "quibusdam",
                        "unde",
                        "nulla",
                    },
                    RecordIdentifiersValueAsString: []string{
                        "illum",
                        "vel",
                        "error",
                    },
                },
                shared.BatchGetRecordIdentifier{
                    FeatureGroupName: "deserunt",
                    FeatureNames: []string{
                        "iure",
                        "magnam",
                    },
                    RecordIdentifiersValueAsString: []string{
                        "ipsa",
                        "delectus",
                        "tempora",
                        "suscipit",
                    },
                },
                shared.BatchGetRecordIdentifier{
                    FeatureGroupName: "molestiae",
                    FeatureNames: []string{
                        "placeat",
                        "voluptatum",
                        "iusto",
                        "excepturi",
                    },
                    RecordIdentifiersValueAsString: []string{
                        "recusandae",
                        "temporibus",
                    },
                },
            },
        },
        XAmzAlgorithm: "ab",
        XAmzContentSha256: "quis",
        XAmzCredential: "veritatis",
        XAmzDate: "deserunt",
        XAmzSecurityToken: "perferendis",
        XAmzSignature: "ipsam",
        XAmzSignedHeaders: "repellendus",
    }

    ctx := context.Background()
    res, err := s.BatchGetRecord(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetRecordResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `BatchGetRecord` - Retrieves a batch of <code>Records</code> from a <code>FeatureGroup</code>.
* `DeleteRecord` - Deletes a <code>Record</code> from a <code>FeatureGroup</code>. When the <code>DeleteRecord</code> API is called a new record will be added to the <code>OfflineStore</code> and the <code>Record</code> will be removed from the <code>OnlineStore</code>. This record will have a value of <code>True</code> in the <code>is_deleted</code> column.
* `GetRecord` - Use for <code>OnlineStore</code> serving from a <code>FeatureStore</code>. Only the latest records stored in the <code>OnlineStore</code> can be retrieved. If no Record with <code>RecordIdentifierValue</code> is found, then an empty result is returned. 
* `PutRecord` - Used for data ingestion into the <code>FeatureStore</code>. The <code>PutRecord</code> API writes to both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the record is the latest record for the <code>recordIdentifier</code>, the record is written to both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the record is a historic record, it is written only to the <code>OfflineStore</code>.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
