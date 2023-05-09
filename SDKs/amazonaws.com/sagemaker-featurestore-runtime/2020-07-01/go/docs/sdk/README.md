# SDK

## Overview

<p>Contains all data plane API operations and data types for the Amazon SageMaker Feature Store. Use this API to put, delete, and retrieve (get) features from a feature store.</p> <p>Use the following operations to configure your <code>OnlineStore</code> and <code>OfflineStore</code> features, and to create and manage feature groups:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateFeatureGroup.html">CreateFeatureGroup</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteFeatureGroup.html">DeleteFeatureGroup</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeFeatureGroup.html">DescribeFeatureGroup</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListFeatureGroups.html">ListFeatureGroups</a> </p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/sagemaker/>
### Available Operations

* [BatchGetRecord](#batchgetrecord) - Retrieves a batch of <code>Records</code> from a <code>FeatureGroup</code>.
* [DeleteRecord](#deleterecord) - <p>Deletes a <code>Record</code> from a <code>FeatureGroup</code> in the <code>OnlineStore</code>. Feature Store supports both <code>SOFT_DELETE</code> and <code>HARD_DELETE</code>. For <code>SOFT_DELETE</code> (default), feature columns are set to <code>null</code> and the record is no longer retrievable by <code>GetRecord</code> or <code>BatchGetRecord</code>. For<code> HARD_DELETE</code>, the complete <code>Record</code> is removed from the <code>OnlineStore</code>. In both cases, Feature Store appends the deleted record marker to the <code>OfflineStore</code> with feature values set to <code>null</code>, <code>is_deleted</code> value set to <code>True</code>, and <code>EventTime</code> set to the delete input <code>EventTime</code>.</p> <p>Note that the <code>EventTime</code> specified in <code>DeleteRecord</code> should be set later than the <code>EventTime</code> of the existing record in the <code>OnlineStore</code> for that <code>RecordIdentifer</code>. If it is not, the deletion does not occur:</p> <ul> <li> <p>For <code>SOFT_DELETE</code>, the existing (undeleted) record remains in the <code>OnlineStore</code>, though the delete record marker is still written to the <code>OfflineStore</code>.</p> </li> <li> <p> <code>HARD_DELETE</code> returns <code>EventTime</code>: <code>400 ValidationException</code> to indicate that the delete operation failed. No delete record marker is written to the <code>OfflineStore</code>.</p> </li> </ul>
* [GetRecord](#getrecord) - Use for <code>OnlineStore</code> serving from a <code>FeatureStore</code>. Only the latest records stored in the <code>OnlineStore</code> can be retrieved. If no Record with <code>RecordIdentifierValue</code> is found, then an empty result is returned. 
* [PutRecord](#putrecord) - Used for data ingestion into the <code>FeatureStore</code>. The <code>PutRecord</code> API writes to both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the record is the latest record for the <code>recordIdentifier</code>, the record is written to both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the record is a historic record, it is written only to the <code>OfflineStore</code>.

## BatchGetRecord

Retrieves a batch of <code>Records</code> from a <code>FeatureGroup</code>.

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
    res, err := s.SDK.BatchGetRecord(ctx, operations.BatchGetRecordRequest{
        RequestBody: operations.BatchGetRecordRequestBody{
            Identifiers: []shared.BatchGetRecordIdentifier{
                shared.BatchGetRecordIdentifier{
                    FeatureGroupName: "quo",
                    FeatureNames: []string{
                        "at",
                    },
                    RecordIdentifiersValueAsString: []string{
                        "maiores",
                        "molestiae",
                        "quod",
                        "quod",
                    },
                },
                shared.BatchGetRecordIdentifier{
                    FeatureGroupName: "esse",
                    FeatureNames: []string{
                        "porro",
                        "dolorum",
                        "dicta",
                    },
                    RecordIdentifiersValueAsString: []string{
                        "officia",
                        "occaecati",
                        "fugit",
                    },
                },
                shared.BatchGetRecordIdentifier{
                    FeatureGroupName: "deleniti",
                    FeatureNames: []string{
                        "optio",
                        "totam",
                        "beatae",
                        "commodi",
                    },
                    RecordIdentifiersValueAsString: []string{
                        "modi",
                        "qui",
                    },
                },
                shared.BatchGetRecordIdentifier{
                    FeatureGroupName: "impedit",
                    FeatureNames: []string{
                        "esse",
                        "ipsum",
                        "excepturi",
                    },
                    RecordIdentifiersValueAsString: []string{
                        "perferendis",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetRecordResponse != nil {
        // handle response
    }
}
```

## DeleteRecord

<p>Deletes a <code>Record</code> from a <code>FeatureGroup</code> in the <code>OnlineStore</code>. Feature Store supports both <code>SOFT_DELETE</code> and <code>HARD_DELETE</code>. For <code>SOFT_DELETE</code> (default), feature columns are set to <code>null</code> and the record is no longer retrievable by <code>GetRecord</code> or <code>BatchGetRecord</code>. For<code> HARD_DELETE</code>, the complete <code>Record</code> is removed from the <code>OnlineStore</code>. In both cases, Feature Store appends the deleted record marker to the <code>OfflineStore</code> with feature values set to <code>null</code>, <code>is_deleted</code> value set to <code>True</code>, and <code>EventTime</code> set to the delete input <code>EventTime</code>.</p> <p>Note that the <code>EventTime</code> specified in <code>DeleteRecord</code> should be set later than the <code>EventTime</code> of the existing record in the <code>OnlineStore</code> for that <code>RecordIdentifer</code>. If it is not, the deletion does not occur:</p> <ul> <li> <p>For <code>SOFT_DELETE</code>, the existing (undeleted) record remains in the <code>OnlineStore</code>, though the delete record marker is still written to the <code>OfflineStore</code>.</p> </li> <li> <p> <code>HARD_DELETE</code> returns <code>EventTime</code>: <code>400 ValidationException</code> to indicate that the delete operation failed. No delete record marker is written to the <code>OfflineStore</code>.</p> </li> </ul>

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
    res, err := s.SDK.DeleteRecord(ctx, operations.DeleteRecordRequest{
        DeletionMode: operations.DeleteRecordDeletionModeEnumHardDelete.ToPointer(),
        EventTime: "saepe",
        FeatureGroupName: "fuga",
        RecordIdentifierValueAsString: "in",
        TargetStores: []shared.TargetStoreEnum{
            shared.TargetStoreEnumOfflineStore,
            shared.TargetStoreEnumOnlineStore,
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetRecord

Use for <code>OnlineStore</code> serving from a <code>FeatureStore</code>. Only the latest records stored in the <code>OnlineStore</code> can be retrieved. If no Record with <code>RecordIdentifierValue</code> is found, then an empty result is returned. 

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
    res, err := s.SDK.GetRecord(ctx, operations.GetRecordRequest{
        FeatureGroupName: "laborum",
        FeatureName: []string{
            "dolorem",
        },
        RecordIdentifierValueAsString: "corporis",
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRecordResponse != nil {
        // handle response
    }
}
```

## PutRecord

Used for data ingestion into the <code>FeatureStore</code>. The <code>PutRecord</code> API writes to both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the record is the latest record for the <code>recordIdentifier</code>, the record is written to both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the record is a historic record, it is written only to the <code>OfflineStore</code>.

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
    res, err := s.SDK.PutRecord(ctx, operations.PutRecordRequest{
        FeatureGroupName: "accusantium",
        RequestBody: operations.PutRecordRequestBody{
            Record: []shared.FeatureValue{
                shared.FeatureValue{
                    FeatureName: "culpa",
                    ValueAsString: "doloribus",
                },
                shared.FeatureValue{
                    FeatureName: "sapiente",
                    ValueAsString: "architecto",
                },
            },
            TargetStores: []shared.TargetStoreEnum{
                shared.TargetStoreEnumOnlineStore,
                shared.TargetStoreEnumOfflineStore,
                shared.TargetStoreEnumOnlineStore,
            },
        },
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
