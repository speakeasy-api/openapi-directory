# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.BatchExecuteStatementRequest{
        Headers: operations.BatchExecuteStatementHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
        },
        Request: operations.BatchExecuteStatementRequestBody{
            Database: "voluptas",
            ParameterSets: [][]shared.SQLParameter{
                []shared.SQLParameter{
                    shared.SQLParameter{
                        Name: "nihil",
                        TypeHint: "DECIMAL",
                        Value: &shared.Field{
                            ArrayValue: &shared.ArrayValue{
                                ArrayValues: []shared.ArrayValue{
                                    shared.ArrayValue{
                                    
                                    },
                                    shared.ArrayValue{
                                    
                                    },
                                    shared.ArrayValue{
                                    
                                    },
                                },
                                BooleanValues: []bool{
                                    true,
                                },
                                DoubleValues: []float64{
                                    11.100000,
                                },
                                LongValues: []int64{
                                    7373105480197164748,
                                    3287288577352441706,
                                },
                                StringValues: []string{
                                    "totam",
                                },
                            },
                            BlobValue: "dolores",
                            BooleanValue: false,
                            DoubleValue: 86.099998,
                            IsNull: false,
                            LongValue: 6303220950515014660,
                            StringValue: "id",
                        },
                    },
                },
            },
            ResourceArn: "aspernatur",
            Schema: "accusantium",
            SecretArn: "totam",
            SQL: "commodi",
            TransactionID: "quis",
        },
    }
    
    res, err := s.BatchExecuteStatement(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchExecuteStatementResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `BatchExecuteStatement` - <p>Runs a batch SQL statement over an array of data.</p> <p>You can run bulk update and insert operations for multiple records using a DML statement with different parameter sets. Bulk operations can provide a significant performance improvement over individual insert and update operations.</p> <important> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> </important>
* `BeginTransaction` - <p>Starts a SQL transaction.</p> <pre><code> &lt;important&gt; &lt;p&gt;A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24 hours.&lt;/p&gt; &lt;p&gt;A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's committed, it's rolled back automatically.&lt;/p&gt; &lt;p&gt;DDL statements inside a transaction cause an implicit commit. We recommend that you run each DDL statement in a separate &lt;code&gt;ExecuteStatement&lt;/code&gt; call with &lt;code&gt;continueAfterTimeout&lt;/code&gt; enabled.&lt;/p&gt; &lt;/important&gt; </code></pre>
* `CommitTransaction` - Ends a SQL transaction started with the <code>BeginTransaction</code> operation and commits the changes.
* `ExecuteSQL` - <p>Runs one or more SQL statements.</p> <important> <p>This operation is deprecated. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation.</p> </important>
* `ExecuteStatement` - <p>Runs a SQL statement against a database.</p> <important> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> </important> <p>The response size limit is 1 MB. If the call returns more than 1 MB of response data, the call is terminated.</p>
* `RollbackTransaction` - Performs a rollback of a transaction. Rolling back a transaction cancels its changes.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
