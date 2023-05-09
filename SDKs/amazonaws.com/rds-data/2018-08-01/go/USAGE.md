<!-- Start SDK Example Usage -->
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
    res, err := s.BatchExecuteStatement(ctx, operations.BatchExecuteStatementRequest{
        RequestBody: operations.BatchExecuteStatementRequestBody{
            Database: sdk.String("corrupti"),
            ParameterSets: [][]shared.SQLParameter{
                []shared.SQLParameter{
                    shared.SQLParameter{
                        Name: sdk.String("Stuart Stiedemann"),
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
                                    false,
                                },
                                DoubleValues: []float64{
                                    4375.87,
                                    2975.34,
                                },
                                LongValues: []int64{
                                    56713,
                                    963663,
                                    272656,
                                    383441,
                                },
                                StringValues: []string{
                                    "minus",
                                    "placeat",
                                },
                            },
                            BlobValue: sdk.String("voluptatum"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(4799.77),
                            IsNull: sdk.Bool(false),
                            LongValue: sdk.Int64(568045),
                            StringValue: sdk.String("nisi"),
                        },
                    },
                    shared.SQLParameter{
                        Name: sdk.String("Jake Bernier MD"),
                        TypeHint: shared.TypeHintEnumJSON.ToPointer(),
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
                                    7781.57,
                                    1403.5,
                                    8700.13,
                                    8700.88,
                                },
                                LongValues: []int64{
                                    473608,
                                    799159,
                                    800911,
                                    461479,
                                },
                                StringValues: []string{
                                    "porro",
                                    "dolorum",
                                    "dicta",
                                },
                            },
                            BlobValue: sdk.String("nam"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(6399.21),
                            IsNull: sdk.Bool(false),
                            LongValue: sdk.Int64(582020),
                            StringValue: sdk.String("fugit"),
                        },
                    },
                    shared.SQLParameter{
                        Name: sdk.String("Irvin Rosenbaum III"),
                        TypeHint: shared.TypeHintEnumTimestamp.ToPointer(),
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
                            BlobValue: sdk.String("iste"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(2223.21),
                            IsNull: sdk.Bool(false),
                            LongValue: sdk.Int64(616934),
                            StringValue: sdk.String("laboriosam"),
                        },
                    },
                },
                []shared.SQLParameter{
                    shared.SQLParameter{
                        Name: sdk.String("Wilbur Kirlin"),
                        TypeHint: shared.TypeHintEnumTimestamp.ToPointer(),
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
                                    602.25,
                                },
                                LongValues: []int64{
                                    666767,
                                    653140,
                                    670638,
                                    170909,
                                },
                                StringValues: []string{
                                    "corporis",
                                },
                            },
                            BlobValue: sdk.String("explicabo"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(7506.86),
                            IsNull: sdk.Bool(false),
                            LongValue: sdk.Int64(315428),
                            StringValue: sdk.String("omnis"),
                        },
                    },
                    shared.SQLParameter{
                        Name: sdk.String("Ms. Cathy Marks"),
                        TypeHint: shared.TypeHintEnumDecimal.ToPointer(),
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
                                },
                                DoubleValues: []float64{
                                    2088.76,
                                    6350.59,
                                    1613.09,
                                },
                                LongValues: []int64{
                                    653108,
                                    581850,
                                    253291,
                                    414369,
                                },
                                StringValues: []string{
                                    "molestiae",
                                    "velit",
                                },
                            },
                            BlobValue: sdk.String("error"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(1589.69),
                            IsNull: sdk.Bool(false),
                            LongValue: sdk.Int64(338007),
                            StringValue: sdk.String("vitae"),
                        },
                    },
                    shared.SQLParameter{
                        Name: sdk.String("Matt Hamill"),
                        TypeHint: shared.TypeHintEnumUUID.ToPointer(),
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
                                },
                                DoubleValues: []float64{
                                    8209.94,
                                    135.71,
                                    971.01,
                                },
                                LongValues: []int64{
                                    837945,
                                    673660,
                                    96098,
                                },
                                StringValues: []string{
                                    "voluptatibus",
                                    "vero",
                                    "nihil",
                                    "praesentium",
                                },
                            },
                            BlobValue: sdk.String("voluptatibus"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(557.14),
                            IsNull: sdk.Bool(false),
                            LongValue: sdk.Int64(604846),
                            StringValue: sdk.String("voluptate"),
                        },
                    },
                    shared.SQLParameter{
                        Name: sdk.String("Thomas Batz"),
                        TypeHint: shared.TypeHintEnumDecimal.ToPointer(),
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
                                    4808.94,
                                    1187.27,
                                },
                                LongValues: []int64{
                                    317983,
                                    880476,
                                    414263,
                                },
                                StringValues: []string{
                                    "quae",
                                    "ipsum",
                                    "quidem",
                                    "molestias",
                                },
                            },
                            BlobValue: sdk.String("excepturi"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(8651.03),
                            IsNull: sdk.Bool(false),
                            LongValue: sdk.Int64(265389),
                            StringValue: sdk.String("praesentium"),
                        },
                    },
                },
                []shared.SQLParameter{
                    shared.SQLParameter{
                        Name: sdk.String("Carl Waelchi DVM"),
                        TypeHint: shared.TypeHintEnumUUID.ToPointer(),
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
                                    8423.42,
                                    1317.97,
                                    6471.74,
                                },
                                LongValues: []int64{
                                    841386,
                                    289406,
                                    264730,
                                },
                                StringValues: []string{
                                    "aliquid",
                                },
                            },
                            BlobValue: sdk.String("cupiditate"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(5528.22),
                            IsNull: sdk.Bool(false),
                            LongValue: sdk.Int64(20107),
                            StringValue: sdk.String("magni"),
                        },
                    },
                    shared.SQLParameter{
                        Name: sdk.String("Vernon Abshire"),
                        TypeHint: shared.TypeHintEnumDate.ToPointer(),
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
                                    2884.76,
                                    9621.89,
                                    4332.88,
                                },
                                LongValues: []int64{
                                    756107,
                                },
                                StringValues: []string{
                                    "aliquid",
                                    "provident",
                                    "necessitatibus",
                                },
                            },
                            BlobValue: sdk.String("sint"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(6389.21),
                            IsNull: sdk.Bool(false),
                            LongValue: sdk.Int64(223081),
                            StringValue: sdk.String("debitis"),
                        },
                    },
                    shared.SQLParameter{
                        Name: sdk.String("Wilbur King"),
                        TypeHint: shared.TypeHintEnumDecimal.ToPointer(),
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
                                    7670.24,
                                    8137.98,
                                },
                                LongValues: []int64{
                                    396506,
                                    675439,
                                },
                                StringValues: []string{
                                    "non",
                                    "occaecati",
                                    "enim",
                                    "accusamus",
                                },
                            },
                            BlobValue: sdk.String("delectus"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(6925.32),
                            IsNull: sdk.Bool(false),
                            LongValue: sdk.Int64(588465),
                            StringValue: sdk.String("nam"),
                        },
                    },
                },
            },
            ResourceArn: "id",
            Schema: sdk.String("blanditiis"),
            SecretArn: "deleniti",
            SQL: "sapiente",
            TransactionID: sdk.String("amet"),
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchExecuteStatementResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->