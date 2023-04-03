# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/rds-data/2018-08-01/go
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

    req := operations.BatchExecuteStatementRequest{
        RequestBody: operations.BatchExecuteStatementRequestBody{
            Database: "corrupti",
            ParameterSets: [][]shared.SQLParameter{
                []shared.SQLParameter{
                    shared.SQLParameter{
                        Name: "quibusdam",
                        TypeHint: "DATE",
                        Value: &shared.Field{
                            ArrayValue: &shared.ArrayValue{
                                ArrayValues: []shared.ArrayValue{
                                    shared.ArrayValue{},
                                    shared.ArrayValue{},
                                    shared.ArrayValue{},
                                    shared.ArrayValue{},
                                },
                                BooleanValues: []bool{
                                    false,
                                    false,
                                    false,
                                },
                                DoubleValues: []float64{
                                    4236.55,
                                    6235.64,
                                    6458.94,
                                    3843.82,
                                },
                                LongValues: []int64{
                                    297534,
                                    891773,
                                },
                                StringValues: []string{
                                    "delectus",
                                },
                            },
                            BlobValue: "tempora",
                            BooleanValue: false,
                            DoubleValue: 3834.41,
                            IsNull: false,
                            LongValue: 477665,
                            StringValue: "minus",
                        },
                    },
                    shared.SQLParameter{
                        Name: "placeat",
                        TypeHint: "DATE",
                        Value: &shared.Field{
                            ArrayValue: &shared.ArrayValue{
                                ArrayValues: []shared.ArrayValue{
                                    shared.ArrayValue{},
                                    shared.ArrayValue{},
                                },
                                BooleanValues: []bool{
                                    false,
                                    false,
                                    false,
                                },
                                DoubleValues: []float64{
                                    9255.97,
                                    8360.79,
                                },
                                LongValues: []int64{
                                    337396,
                                },
                                StringValues: []string{
                                    "deserunt",
                                },
                            },
                            BlobValue: "perferendis",
                            BooleanValue: false,
                            DoubleValue: 3682.41,
                            IsNull: false,
                            LongValue: 832620,
                            StringValue: "sapiente",
                        },
                    },
                    shared.SQLParameter{
                        Name: "quo",
                        TypeHint: "JSON",
                        Value: &shared.Field{
                            ArrayValue: &shared.ArrayValue{
                                ArrayValues: []shared.ArrayValue{
                                    shared.ArrayValue{},
                                    shared.ArrayValue{},
                                    shared.ArrayValue{},
                                    shared.ArrayValue{},
                                },
                                BooleanValues: []bool{
                                    false,
                                    false,
                                    false,
                                    false,
                                },
                                DoubleValues: []float64{
                                    4736.08,
                                    7991.59,
                                    8009.11,
                                    4614.79,
                                },
                                LongValues: []int64{
                                    780529,
                                    678880,
                                    118274,
                                },
                                StringValues: []string{
                                    "officia",
                                    "occaecati",
                                    "fugit",
                                },
                            },
                            BlobValue: "deleniti",
                            BooleanValue: false,
                            DoubleValue: 9446.69,
                            IsNull: false,
                            LongValue: 758616,
                            StringValue: "totam",
                        },
                    },
                },
                []shared.SQLParameter{
                    shared.SQLParameter{
                        Name: "commodi",
                        TypeHint: "TIMESTAMP",
                        Value: &shared.Field{
                            ArrayValue: &shared.ArrayValue{
                                ArrayValues: []shared.ArrayValue{
                                    shared.ArrayValue{},
                                    shared.ArrayValue{},
                                },
                                BooleanValues: []bool{
                                    false,
                                },
                                DoubleValues: []float64{
                                    7369.18,
                                    4561.5,
                                    2165.5,
                                    5684.34,
                                },
                                LongValues: []int64{
                                    18789,
                                },
                                StringValues: []string{
                                    "natus",
                                    "sed",
                                },
                            },
                            BlobValue: "iste",
                            BooleanValue: false,
                            DoubleValue: 2223.21,
                            IsNull: false,
                            LongValue: 616934,
                            StringValue: "laboriosam",
                        },
                    },
                },
                []shared.SQLParameter{
                    shared.SQLParameter{
                        Name: "saepe",
                        TypeHint: "TIME",
                        Value: &shared.Field{
                            ArrayValue: &shared.ArrayValue{
                                ArrayValues: []shared.ArrayValue{
                                    shared.ArrayValue{},
                                    shared.ArrayValue{},
                                },
                                BooleanValues: []bool{
                                    false,
                                    false,
                                },
                                DoubleValues: []float64{
                                    4370.32,
                                    9023.49,
                                    6976.31,
                                },
                                LongValues: []int64{
                                    60225,
                                },
                                StringValues: []string{
                                    "est",
                                    "mollitia",
                                    "laborum",
                                    "dolores",
                                },
                            },
                            BlobValue: "dolorem",
                            BooleanValue: false,
                            DoubleValue: 3581.52,
                            IsNull: false,
                            LongValue: 128926,
                            StringValue: "nobis",
                        },
                    },
                    shared.SQLParameter{
                        Name: "enim",
                        TypeHint: "DATE",
                        Value: &shared.Field{
                            ArrayValue: &shared.ArrayValue{
                                ArrayValues: []shared.ArrayValue{
                                    shared.ArrayValue{},
                                    shared.ArrayValue{},
                                },
                                BooleanValues: []bool{
                                    false,
                                    false,
                                },
                                DoubleValues: []float64{
                                    384.25,
                                    4386.01,
                                    6342.74,
                                },
                                LongValues: []int64{
                                    958950,
                                    102044,
                                    652790,
                                    208876,
                                },
                                StringValues: []string{
                                    "consequuntur",
                                    "repellat",
                                    "mollitia",
                                },
                            },
                            BlobValue: "occaecati",
                            BooleanValue: false,
                            DoubleValue: 2532.91,
                            IsNull: false,
                            LongValue: 414369,
                            StringValue: "quam",
                        },
                    },
                    shared.SQLParameter{
                        Name: "molestiae",
                        TypeHint: "UUID",
                        Value: &shared.Field{
                            ArrayValue: &shared.ArrayValue{
                                ArrayValues: []shared.ArrayValue{
                                    shared.ArrayValue{},
                                    shared.ArrayValue{},
                                    shared.ArrayValue{},
                                },
                                BooleanValues: []bool{
                                    false,
                                },
                                DoubleValues: []float64{
                                    1103.75,
                                    6747.52,
                                },
                                LongValues: []int64{
                                    317202,
                                    138183,
                                    778346,
                                },
                                StringValues: []string{
                                    "tenetur",
                                },
                            },
                            BlobValue: "ipsam",
                            BooleanValue: false,
                            DoubleValue: 6625.27,
                            IsNull: false,
                            LongValue: 820994,
                            StringValue: "aut",
                        },
                    },
                    shared.SQLParameter{
                        Name: "quasi",
                        TypeHint: "DATE",
                        Value: &shared.Field{
                            ArrayValue: &shared.ArrayValue{
                                ArrayValues: []shared.ArrayValue{
                                    shared.ArrayValue{},
                                    shared.ArrayValue{},
                                    shared.ArrayValue{},
                                    shared.ArrayValue{},
                                },
                                BooleanValues: []bool{
                                    false,
                                    false,
                                    false,
                                },
                                DoubleValues: []float64{
                                    9719.45,
                                },
                                LongValues: []int64{
                                    878194,
                                    468651,
                                    509624,
                                    976762,
                                },
                                StringValues: []string{
                                    "omnis",
                                },
                            },
                            BlobValue: "voluptate",
                            BooleanValue: false,
                            DoubleValue: 7392.64,
                            IsNull: false,
                            LongValue: 19987,
                            StringValue: "doloremque",
                        },
                    },
                },
            },
            ResourceArn: "reprehenderit",
            Schema: "ut",
            SecretArn: "maiores",
            SQL: "dicta",
            TransactionID: "corporis",
        },
        XAmzAlgorithm: "dolore",
        XAmzContentSha256: "iusto",
        XAmzCredential: "dicta",
        XAmzDate: "harum",
        XAmzSecurityToken: "enim",
        XAmzSignature: "accusamus",
        XAmzSignedHeaders: "commodi",
    }

    ctx := context.Background()
    res, err := s.BatchExecuteStatement(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchExecuteStatementResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `BatchExecuteStatement` - <p>Runs a batch SQL statement over an array of data.</p> <p>You can run bulk update and insert operations for multiple records using a DML statement with different parameter sets. Bulk operations can provide a significant performance improvement over individual insert and update operations.</p> <note> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> <p>There isn't a fixed upper limit on the number of parameter sets. However, the maximum size of the HTTP request submitted through the Data API is 4 MiB. If the request exceeds this limit, the Data API returns an error and doesn't process the request. This 4-MiB limit includes the size of the HTTP headers and the JSON notation in the request. Thus, the number of parameter sets that you can include depends on a combination of factors, such as the size of the SQL statement and the size of each parameter set.</p> <p>The response size limit is 1 MiB. If the call returns more than 1 MiB of response data, the call is terminated.</p> </note>
* `BeginTransaction` - <p>Starts a SQL transaction.</p> <note> <p>A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24 hours.</p> <p>A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's committed, it's rolled back automatically.</p> <p>DDL statements inside a transaction cause an implicit commit. We recommend that you run each DDL statement in a separate <code>ExecuteStatement</code> call with <code>continueAfterTimeout</code> enabled.</p> </note>
* `CommitTransaction` - Ends a SQL transaction started with the <code>BeginTransaction</code> operation and commits the changes.
* `ExecuteSQL` - <p>Runs one or more SQL statements.</p> <note> <p>This operation is deprecated. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation.</p> </note>
* `ExecuteStatement` - <p>Runs a SQL statement against a database.</p> <note> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> <p>If the binary response data from the database is more than 1 MB, the call is terminated.</p> </note>
* `RollbackTransaction` - Performs a rollback of a transaction. Rolling back a transaction cancels its changes.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
