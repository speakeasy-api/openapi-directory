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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.BatchExecuteStatementRequestBody{
            Database: "nulla",
            ParameterSets: [][]shared.SQLParameter{
                []shared.SQLParameter{
                    shared.SQLParameter{
                        Name: "facilis",
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
                                    "deleniti",
                                    "similique",
                                    "reprehenderit",
                                },
                            },
                            BlobValue: "molestiae",
                            BooleanValue: false,
                            DoubleValue: 8360.79,
                            IsNull: false,
                            LongValue: 71036,
                            StringValue: "laboriosam",
                        },
                    },
                    shared.SQLParameter{
                        Name: "dicta",
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
                                    "occaecati",
                                    "dolor",
                                },
                            },
                            BlobValue: "soluta",
                            BooleanValue: false,
                            DoubleValue: 1182.74,
                            IsNull: false,
                            LongValue: 720633,
                            StringValue: "rerum",
                        },
                    },
                    shared.SQLParameter{
                        Name: "culpa",
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
                                    "blanditiis",
                                    "numquam",
                                    "similique",
                                },
                            },
                            BlobValue: "dolores",
                            BooleanValue: false,
                            DoubleValue: 187.89,
                            IsNull: false,
                            LongValue: 324141,
                            StringValue: "et",
                        },
                    },
                },
                []shared.SQLParameter{
                    shared.SQLParameter{
                        Name: "laborum",
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
                                    "inventore",
                                },
                            },
                            BlobValue: "ut",
                            BooleanValue: false,
                            DoubleValue: 6667.67,
                            IsNull: false,
                            LongValue: 653140,
                            StringValue: "libero",
                        },
                    },
                },
            },
            ResourceArn: "ipsum",
            Schema: "non",
            SecretArn: "ea",
            SQL: "magni",
            TransactionID: "placeat",
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