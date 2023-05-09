# SDK

## Overview

<p><fullname>Amazon RDS Data Service</fullname> <p>Amazon RDS provides an HTTP endpoint to run SQL statements on an Amazon Aurora Serverless v1 DB cluster. To run these statements, you work with the Data Service API.</p> <note> <p>The Data Service API isn't supported on Amazon Aurora Serverless v2 DB clusters.</p> </note> <p>For more information about the Data Service API, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API</a> in the <i>Amazon Aurora User Guide</i>.</p></p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/rds-data/>
### Available Operations

* [BatchExecuteStatement](#batchexecutestatement) - <p>Runs a batch SQL statement over an array of data.</p> <p>You can run bulk update and insert operations for multiple records using a DML statement with different parameter sets. Bulk operations can provide a significant performance improvement over individual insert and update operations.</p> <note> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> <p>There isn't a fixed upper limit on the number of parameter sets. However, the maximum size of the HTTP request submitted through the Data API is 4 MiB. If the request exceeds this limit, the Data API returns an error and doesn't process the request. This 4-MiB limit includes the size of the HTTP headers and the JSON notation in the request. Thus, the number of parameter sets that you can include depends on a combination of factors, such as the size of the SQL statement and the size of each parameter set.</p> <p>The response size limit is 1 MiB. If the call returns more than 1 MiB of response data, the call is terminated.</p> </note>
* [BeginTransaction](#begintransaction) - <p>Starts a SQL transaction.</p> <note> <p>A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24 hours.</p> <p>A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's committed, it's rolled back automatically.</p> <p>DDL statements inside a transaction cause an implicit commit. We recommend that you run each DDL statement in a separate <code>ExecuteStatement</code> call with <code>continueAfterTimeout</code> enabled.</p> </note>
* [CommitTransaction](#committransaction) - Ends a SQL transaction started with the <code>BeginTransaction</code> operation and commits the changes.
* [~~ExecuteSQL~~](#executesql) - <p>Runs one or more SQL statements.</p> <note> <p>This operation is deprecated. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation.</p> </note> :warning: **Deprecated**
* [ExecuteStatement](#executestatement) - <p>Runs a SQL statement against a database.</p> <note> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> <p>If the binary response data from the database is more than 1 MB, the call is terminated.</p> </note>
* [RollbackTransaction](#rollbacktransaction) - Performs a rollback of a transaction. Rolling back a transaction cancels its changes.

## BatchExecuteStatement

<p>Runs a batch SQL statement over an array of data.</p> <p>You can run bulk update and insert operations for multiple records using a DML statement with different parameter sets. Bulk operations can provide a significant performance improvement over individual insert and update operations.</p> <note> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> <p>There isn't a fixed upper limit on the number of parameter sets. However, the maximum size of the HTTP request submitted through the Data API is 4 MiB. If the request exceeds this limit, the Data API returns an error and doesn't process the request. This 4-MiB limit includes the size of the HTTP headers and the JSON notation in the request. Thus, the number of parameter sets that you can include depends on a combination of factors, such as the size of the SQL statement and the size of each parameter set.</p> <p>The response size limit is 1 MiB. If the call returns more than 1 MiB of response data, the call is terminated.</p> </note>

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
    res, err := s.SDK.BatchExecuteStatement(ctx, operations.BatchExecuteStatementRequest{
        RequestBody: operations.BatchExecuteStatementRequestBody{
            Database: sdk.String("nihil"),
            ParameterSets: [][]shared.SQLParameter{
                []shared.SQLParameter{
                    shared.SQLParameter{
                        Name: sdk.String("Leroy Greenfelder"),
                        TypeHint: shared.TypeHintEnumTime.ToPointer(),
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
                                    false,
                                },
                                DoubleValues: []float64{
                                    1028.63,
                                },
                                LongValues: []int64{
                                    92373,
                                    569965,
                                },
                                StringValues: []string{
                                    "provident",
                                    "quos",
                                },
                            },
                            BlobValue: sdk.String("sint"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(336.25),
                            IsNull: sdk.Bool(false),
                            LongValue: sdk.Int64(653201),
                            StringValue: sdk.String("reiciendis"),
                        },
                    },
                    shared.SQLParameter{
                        Name: sdk.String("Tommy Kemmer"),
                        TypeHint: shared.TypeHintEnumJSON.ToPointer(),
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
                                    9840.43,
                                    8919.24,
                                },
                                LongValues: []int64{
                                    806194,
                                    537023,
                                },
                                StringValues: []string{
                                    "in",
                                    "architecto",
                                    "architecto",
                                },
                            },
                            BlobValue: sdk.String("repudiandae"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(3523.12),
                            IsNull: sdk.Bool(false),
                            LongValue: sdk.Int64(714242),
                            StringValue: sdk.String("nihil"),
                        },
                    },
                    shared.SQLParameter{
                        Name: sdk.String("Marty Cormier"),
                        TypeHint: shared.TypeHintEnumJSON.ToPointer(),
                        Value: &shared.Field{
                            ArrayValue: &shared.ArrayValue{
                                ArrayValues: []shared.ArrayValue{
                                    shared.ArrayValue{},
                                },
                                BooleanValues: []bool{
                                    false,
                                    false,
                                    false,
                                },
                                DoubleValues: []float64{
                                    1668.47,
                                    1238.2,
                                    7790.51,
                                },
                                LongValues: []int64{
                                    864934,
                                    807319,
                                    411397,
                                    569101,
                                },
                                StringValues: []string{
                                    "ea",
                                },
                            },
                            BlobValue: sdk.String("accusantium"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(691.67),
                            IsNull: sdk.Bool(false),
                            LongValue: sdk.Int64(982575),
                            StringValue: sdk.String("quidem"),
                        },
                    },
                },
                []shared.SQLParameter{
                    shared.SQLParameter{
                        Name: sdk.String("Dr. Stacey Reichert"),
                        TypeHint: shared.TypeHintEnumDecimal.ToPointer(),
                        Value: &shared.Field{
                            ArrayValue: &shared.ArrayValue{
                                ArrayValues: []shared.ArrayValue{
                                    shared.ArrayValue{},
                                },
                                BooleanValues: []bool{
                                    false,
                                    false,
                                    false,
                                    false,
                                },
                                DoubleValues: []float64{
                                    117.14,
                                },
                                LongValues: []int64{
                                    359978,
                                    944124,
                                    729991,
                                    749999,
                                },
                                StringValues: []string{
                                    "quis",
                                },
                            },
                            BlobValue: sdk.String("totam"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(4895.49),
                            IsNull: sdk.Bool(false),
                            LongValue: sdk.Int64(54338),
                            StringValue: sdk.String("quis"),
                        },
                    },
                    shared.SQLParameter{
                        Name: sdk.String("Ruby Auer"),
                        TypeHint: shared.TypeHintEnumTimestamp.ToPointer(),
                        Value: &shared.Field{
                            ArrayValue: &shared.ArrayValue{
                                ArrayValues: []shared.ArrayValue{
                                    shared.ArrayValue{},
                                },
                                BooleanValues: []bool{
                                    false,
                                    false,
                                    false,
                                    false,
                                },
                                DoubleValues: []float64{
                                    9441.2,
                                    9280.82,
                                },
                                LongValues: []int64{
                                    704415,
                                    596656,
                                    31838,
                                },
                                StringValues: []string{
                                    "consequuntur",
                                    "blanditiis",
                                    "error",
                                    "eaque",
                                },
                            },
                            BlobValue: sdk.String("occaecati"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(6990.98),
                            IsNull: sdk.Bool(false),
                            LongValue: sdk.Int64(237893),
                            StringValue: sdk.String("asperiores"),
                        },
                    },
                },
            },
            ResourceArn: "earum",
            Schema: sdk.String("modi"),
            SecretArn: "iste",
            SQL: "dolorum",
            TransactionID: sdk.String("deleniti"),
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("quos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchExecuteStatementResponse != nil {
        // handle response
    }
}
```

## BeginTransaction

<p>Starts a SQL transaction.</p> <note> <p>A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24 hours.</p> <p>A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's committed, it's rolled back automatically.</p> <p>DDL statements inside a transaction cause an implicit commit. We recommend that you run each DDL statement in a separate <code>ExecuteStatement</code> call with <code>continueAfterTimeout</code> enabled.</p> </note>

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
    res, err := s.SDK.BeginTransaction(ctx, operations.BeginTransactionRequest{
        RequestBody: operations.BeginTransactionRequestBody{
            Database: sdk.String("aliquid"),
            ResourceArn: "dolorem",
            Schema: sdk.String("dolorem"),
            SecretArn: "dolor",
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BeginTransactionResponse != nil {
        // handle response
    }
}
```

## CommitTransaction

Ends a SQL transaction started with the <code>BeginTransaction</code> operation and commits the changes.

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
    res, err := s.SDK.CommitTransaction(ctx, operations.CommitTransactionRequest{
        RequestBody: operations.CommitTransactionRequestBody{
            ResourceArn: "reiciendis",
            SecretArn: "amet",
            TransactionID: "dolorum",
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("quaerat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommitTransactionResponse != nil {
        // handle response
    }
}
```

## ~~ExecuteSQL~~

<p>Runs one or more SQL statements.</p> <note> <p>This operation is deprecated. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation.</p> </note>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.ExecuteSQL(ctx, operations.ExecuteSQLRequest{
        RequestBody: operations.ExecuteSQLRequestBody{
            AwsSecretStoreArn: "accusamus",
            Database: sdk.String("quidem"),
            DbClusterOrInstanceArn: "voluptatibus",
            Schema: sdk.String("voluptas"),
            SQLStatements: "natus",
        },
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("soluta"),
        XAmzSignedHeaders: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExecuteSQLResponse != nil {
        // handle response
    }
}
```

## ExecuteStatement

<p>Runs a SQL statement against a database.</p> <note> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> <p>If the binary response data from the database is more than 1 MB, the call is terminated.</p> </note>

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
    res, err := s.SDK.ExecuteStatement(ctx, operations.ExecuteStatementRequest{
        RequestBody: operations.ExecuteStatementRequestBody{
            ContinueAfterTimeout: sdk.Bool(false),
            Database: sdk.String("iusto"),
            FormatRecordsAs: operations.ExecuteStatementRequestBodyFormatRecordsAsEnumNone.ToPointer(),
            IncludeResultMetadata: sdk.Bool(false),
            Parameters: []shared.SQLParameter{
                shared.SQLParameter{
                    Name: sdk.String("Arturo Treutel"),
                    TypeHint: shared.TypeHintEnumTimestamp.ToPointer(),
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
                                9064.18,
                                2633.22,
                                1372.2,
                            },
                            LongValues: []int64{
                                229219,
                            },
                            StringValues: []string{
                                "accusamus",
                                "ad",
                                "saepe",
                                "suscipit",
                            },
                        },
                        BlobValue: sdk.String("deserunt"),
                        BooleanValue: sdk.Bool(false),
                        DoubleValue: sdk.Float64(5883.17),
                        IsNull: sdk.Bool(false),
                        LongValue: sdk.Int64(324683),
                        StringValue: sdk.String("repellendus"),
                    },
                },
                shared.SQLParameter{
                    Name: sdk.String("Donnie Abbott"),
                    TypeHint: shared.TypeHintEnumUUID.ToPointer(),
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
                                false,
                            },
                            DoubleValues: []float64{
                                1856.36,
                                6798.8,
                                9527.92,
                                4561.3,
                            },
                            LongValues: []int64{
                                483409,
                                215507,
                                788740,
                            },
                            StringValues: []string{
                                "amet",
                                "tempore",
                                "accusamus",
                                "numquam",
                            },
                        },
                        BlobValue: sdk.String("enim"),
                        BooleanValue: sdk.Bool(false),
                        DoubleValue: sdk.Float64(2133.12),
                        IsNull: sdk.Bool(false),
                        LongValue: sdk.Int64(957451),
                        StringValue: sdk.String("totam"),
                    },
                },
                shared.SQLParameter{
                    Name: sdk.String("Karen Rath"),
                    TypeHint: shared.TypeHintEnumTimestamp.ToPointer(),
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
                                4635.75,
                                2148.8,
                                2776.28,
                            },
                            LongValues: []int64{
                                586784,
                            },
                            StringValues: []string{
                                "pariatur",
                                "soluta",
                                "dicta",
                                "laborum",
                            },
                        },
                        BlobValue: sdk.String("totam"),
                        BooleanValue: sdk.Bool(false),
                        DoubleValue: sdk.Float64(2768.94),
                        IsNull: sdk.Bool(false),
                        LongValue: sdk.Int64(132068),
                        StringValue: sdk.String("dolores"),
                    },
                },
            },
            ResourceArn: "distinctio",
            ResultSetOptions: &operations.ExecuteStatementRequestBodyResultSetOptions{
                DecimalReturnType: shared.DecimalReturnTypeEnumDoubleOrLong.ToPointer(),
                LongReturnType: shared.LongReturnTypeEnumString.ToPointer(),
            },
            Schema: sdk.String("quam"),
            SecretArn: "molestias",
            SQL: "temporibus",
            TransactionID: sdk.String("qui"),
        },
        XAmzAlgorithm: sdk.String("neque"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("sunt"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("nam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExecuteStatementResponse != nil {
        // handle response
    }
}
```

## RollbackTransaction

Performs a rollback of a transaction. Rolling back a transaction cancels its changes.

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
    res, err := s.SDK.RollbackTransaction(ctx, operations.RollbackTransactionRequest{
        RequestBody: operations.RollbackTransactionRequestBody{
            ResourceArn: "hic",
            SecretArn: "voluptatem",
            TransactionID: "cumque",
        },
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RollbackTransactionResponse != nil {
        // handle response
    }
}
```
