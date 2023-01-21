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