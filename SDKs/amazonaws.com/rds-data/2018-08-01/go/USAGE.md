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