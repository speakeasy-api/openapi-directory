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