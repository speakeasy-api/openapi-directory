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
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.BatchExecuteStatementRequest{
        Headers: operations.BatchExecuteStatementHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.BatchExecuteStatementRequestBody{
            Database: "illum",
            ParameterSets: [][]shared.SQLParameter{
                []shared.SQLParameter{
                    shared.SQLParameter{
                        Name: "deserunt",
                        TypeHint: "TIMESTAMP",
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
                                    567.13,
                                    9636.63,
                                    2726.56,
                                    3834.41,
                                },
                                LongValues: []int64{
                                    791725,
                                    812169,
                                },
                                StringValues: []string{
                                    "iusto",
                                    "excepturi",
                                    "nisi",
                                },
                            },
                            BlobValue: "recusandae",
                            BooleanValue: false,
                            DoubleValue: 8360.79,
                            IsNull: false,
                            LongValue: 71036,
                            StringValue: "quis",
                        },
                    },
                    shared.SQLParameter{
                        Name: "veritatis",
                        TypeHint: "DATE",
                        Value: &shared.Field{
                            ArrayValue: &shared.ArrayValue{
                                ArrayValues: []shared.ArrayValue{
                                    shared.ArrayValue{},
                                },
                                BooleanValues: []bool{
                                    false,
                                    false,
                                },
                                DoubleValues: []float64{
                                    9571.56,
                                    7781.57,
                                    1403.5,
                                    8700.13,
                                },
                                LongValues: []int64{
                                    978619,
                                    473608,
                                    799159,
                                    800911,
                                },
                                StringValues: []string{
                                    "totam",
                                    "porro",
                                },
                            },
                            BlobValue: "dolorum",
                            BooleanValue: false,
                            DoubleValue: 1182.74,
                            IsNull: false,
                            LongValue: 720633,
                            StringValue: "officia",
                        },
                    },
                    shared.SQLParameter{
                        Name: "occaecati",
                        TypeHint: "JSON",
                        Value: &shared.Field{
                            ArrayValue: &shared.ArrayValue{
                                ArrayValues: []shared.ArrayValue{
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
                                    5218.48,
                                    1059.07,
                                    4146.62,
                                    4736,
                                },
                                LongValues: []int64{
                                    186332,
                                    774234,
                                },
                                StringValues: []string{
                                    "esse",
                                    "ipsum",
                                    "excepturi",
                                },
                            },
                            BlobValue: "aspernatur",
                            BooleanValue: false,
                            DoubleValue: 187.89,
                            IsNull: false,
                            LongValue: 324141,
                            StringValue: "natus",
                        },
                    },
                },
                []shared.SQLParameter{
                    shared.SQLParameter{
                        Name: "iste",
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
                                    false,
                                },
                                DoubleValues: []float64{
                                    9025.99,
                                    6818.2,
                                    4499.5,
                                    3595.08,
                                },
                                LongValues: []int64{
                                    437032,
                                    902349,
                                    697631,
                                },
                                StringValues: []string{
                                    "ipsa",
                                },
                            },
                            BlobValue: "reiciendis",
                            BooleanValue: false,
                            DoubleValue: 6667.67,
                            IsNull: false,
                            LongValue: 653140,
                            StringValue: "laborum",
                        },
                    },
                },
            },
            ResourceArn: "dolores",
            Schema: "dolorem",
            SecretArn: "corporis",
            SQL: "explicabo",
            TransactionID: "nobis",
        },
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
## SDK Available Operations

### SDK SDK

* `BatchExecuteStatement` - <p>Runs a batch SQL statement over an array of data.</p> <p>You can run bulk update and insert operations for multiple records using a DML statement with different parameter sets. Bulk operations can provide a significant performance improvement over individual insert and update operations.</p> <note> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> <p>There isn't a fixed upper limit on the number of parameter sets. However, the maximum size of the HTTP request submitted through the Data API is 4 MiB. If the request exceeds this limit, the Data API returns an error and doesn't process the request. This 4-MiB limit includes the size of the HTTP headers and the JSON notation in the request. Thus, the number of parameter sets that you can include depends on a combination of factors, such as the size of the SQL statement and the size of each parameter set.</p> <p>The response size limit is 1 MiB. If the call returns more than 1 MiB of response data, the call is terminated.</p> </note>
* `BeginTransaction` - <p>Starts a SQL transaction.</p> <note> <p>A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24 hours.</p> <p>A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's committed, it's rolled back automatically.</p> <p>DDL statements inside a transaction cause an implicit commit. We recommend that you run each DDL statement in a separate <code>ExecuteStatement</code> call with <code>continueAfterTimeout</code> enabled.</p> </note>
* `CommitTransaction` - Ends a SQL transaction started with the <code>BeginTransaction</code> operation and commits the changes.
* `ExecuteSQL` - <p>Runs one or more SQL statements.</p> <note> <p>This operation is deprecated. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation.</p> </note>
* `ExecuteStatement` - <p>Runs a SQL statement against a database.</p> <note> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> <p>If the binary response data from the database is more than 1 MB, the call is terminated.</p> </note>
* `RollbackTransaction` - Performs a rollback of a transaction. Rolling back a transaction cancels its changes.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
