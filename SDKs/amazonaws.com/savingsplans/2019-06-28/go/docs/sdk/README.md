# SDK

## Overview

Savings Plans are a pricing model that offer significant savings on AWS usage (for example, on Amazon EC2 instances). You commit to a consistent amount of usage, in USD per hour, for a term of 1 or 3 years, and receive a lower price for that usage. For more information, see the <a href="https://docs.aws.amazon.com/savingsplans/latest/userguide/">AWS Savings Plans User Guide</a>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/savingsplans/>
### Available Operations

* [CreateSavingsPlan](#createsavingsplan) - Creates a Savings Plan.
* [DeleteQueuedSavingsPlan](#deletequeuedsavingsplan) - Deletes the queued purchase for the specified Savings Plan.
* [DescribeSavingsPlanRates](#describesavingsplanrates) - Describes the specified Savings Plans rates.
* [DescribeSavingsPlans](#describesavingsplans) - Describes the specified Savings Plans.
* [DescribeSavingsPlansOfferingRates](#describesavingsplansofferingrates) - Describes the specified Savings Plans offering rates.
* [DescribeSavingsPlansOfferings](#describesavingsplansofferings) - Describes the specified Savings Plans offerings.
* [ListTagsForResource](#listtagsforresource) - Lists the tags for the specified resource.
* [TagResource](#tagresource) - Adds the specified tags to the specified resource.
* [UntagResource](#untagresource) - Removes the specified tags from the specified resource.

## CreateSavingsPlan

Creates a Savings Plan.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateSavingsPlan(ctx, operations.CreateSavingsPlanRequest{
        RequestBody: operations.CreateSavingsPlanRequestBody{
            ClientToken: sdk.String("voluptatum"),
            Commitment: "iusto",
            PurchaseTime: types.MustTimeFromString("2022-03-20T06:24:36.919Z"),
            SavingsPlanOfferingID: "recusandae",
            Tags: map[string]string{
                "ab": "quis",
                "veritatis": "deserunt",
                "perferendis": "ipsam",
                "repellendus": "sapiente",
            },
            UpfrontPaymentAmount: sdk.String("quo"),
        },
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("quod"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSavingsPlanResponse != nil {
        // handle response
    }
}
```

## DeleteQueuedSavingsPlan

Deletes the queued purchase for the specified Savings Plan.

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
    res, err := s.SDK.DeleteQueuedSavingsPlan(ctx, operations.DeleteQueuedSavingsPlanRequest{
        RequestBody: operations.DeleteQueuedSavingsPlanRequestBody{
            SavingsPlanID: "esse",
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteQueuedSavingsPlanResponse != nil {
        // handle response
    }
}
```

## DescribeSavingsPlanRates

Describes the specified Savings Plans rates.

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
    res, err := s.SDK.DescribeSavingsPlanRates(ctx, operations.DescribeSavingsPlanRatesRequest{
        RequestBody: operations.DescribeSavingsPlanRatesRequestBody{
            Filters: []shared.SavingsPlanRateFilter{
                shared.SavingsPlanRateFilter{
                    Name: shared.SavingsPlanRateFilterNameEnumProductType.ToPointer(),
                    Values: []string{
                        "optio",
                        "totam",
                        "beatae",
                        "commodi",
                    },
                },
            },
            MaxResults: sdk.Int64(473600),
            NextToken: sdk.String("modi"),
            SavingsPlanID: "qui",
        },
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSavingsPlanRatesResponse != nil {
        // handle response
    }
}
```

## DescribeSavingsPlans

Describes the specified Savings Plans.

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
    res, err := s.SDK.DescribeSavingsPlans(ctx, operations.DescribeSavingsPlansRequest{
        RequestBody: operations.DescribeSavingsPlansRequestBody{
            Filters: []shared.SavingsPlanFilter{
                shared.SavingsPlanFilter{
                    Name: shared.SavingsPlansFilterNameEnumSavingsPlanType.ToPointer(),
                    Values: []string{
                        "iste",
                    },
                },
                shared.SavingsPlanFilter{
                    Name: shared.SavingsPlansFilterNameEnumCommitment.ToPointer(),
                    Values: []string{
                        "laboriosam",
                        "hic",
                        "saepe",
                    },
                },
            },
            MaxResults: sdk.Int64(681820),
            NextToken: sdk.String("in"),
            SavingsPlanArns: []string{
                "iste",
                "iure",
            },
            SavingsPlanIds: []string{
                "quidem",
                "architecto",
                "ipsa",
                "reiciendis",
            },
            States: []shared.SavingsPlanStateEnum{
                shared.SavingsPlanStateEnumRetired,
                shared.SavingsPlanStateEnumQueued,
                shared.SavingsPlanStateEnumPaymentFailed,
            },
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSavingsPlansResponse != nil {
        // handle response
    }
}
```

## DescribeSavingsPlansOfferingRates

Describes the specified Savings Plans offering rates.

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
    res, err := s.SDK.DescribeSavingsPlansOfferingRates(ctx, operations.DescribeSavingsPlansOfferingRatesRequest{
        RequestBody: operations.DescribeSavingsPlansOfferingRatesRequestBody{
            Filters: []shared.SavingsPlanOfferingRateFilterElement{
                shared.SavingsPlanOfferingRateFilterElement{
                    Name: shared.SavingsPlanRateFilterAttributeEnumProductDescription.ToPointer(),
                    Values: []string{
                        "iure",
                    },
                },
                shared.SavingsPlanOfferingRateFilterElement{
                    Name: shared.SavingsPlanRateFilterAttributeEnumProductDescription.ToPointer(),
                    Values: []string{
                        "sapiente",
                        "architecto",
                        "mollitia",
                        "dolorem",
                    },
                },
            },
            MaxResults: sdk.Int64(635059),
            NextToken: sdk.String("consequuntur"),
            Operations: []string{
                "mollitia",
                "occaecati",
                "numquam",
                "commodi",
            },
            Products: []shared.SavingsPlanProductTypeEnum{
                shared.SavingsPlanProductTypeEnumFargate,
                shared.SavingsPlanProductTypeEnumEc2,
            },
            SavingsPlanOfferingIds: []string{
                "quia",
                "quis",
                "vitae",
            },
            SavingsPlanPaymentOptions: []shared.SavingsPlanPaymentOptionEnum{
                shared.SavingsPlanPaymentOptionEnumPartialUpfront,
                shared.SavingsPlanPaymentOptionEnumAllUpfront,
                shared.SavingsPlanPaymentOptionEnumAllUpfront,
            },
            SavingsPlanTypes: []shared.SavingsPlanTypeEnum{
                shared.SavingsPlanTypeEnumCompute,
                shared.SavingsPlanTypeEnumSageMaker,
                shared.SavingsPlanTypeEnumEc2Instance,
                shared.SavingsPlanTypeEnumEc2Instance,
            },
            ServiceCodes: []shared.SavingsPlanRateServiceCodeEnum{
                shared.SavingsPlanRateServiceCodeEnumAmazonEc2,
                shared.SavingsPlanRateServiceCodeEnumAmazonEc2,
                shared.SavingsPlanRateServiceCodeEnumAwsLambda,
                shared.SavingsPlanRateServiceCodeEnumAmazonSageMaker,
            },
            UsageTypes: []string{
                "quasi",
                "reiciendis",
                "voluptatibus",
            },
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSavingsPlansOfferingRatesResponse != nil {
        // handle response
    }
}
```

## DescribeSavingsPlansOfferings

Describes the specified Savings Plans offerings.

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
    res, err := s.SDK.DescribeSavingsPlansOfferings(ctx, operations.DescribeSavingsPlansOfferingsRequest{
        RequestBody: operations.DescribeSavingsPlansOfferingsRequestBody{
            Currencies: []shared.CurrencyCodeEnum{
                shared.CurrencyCodeEnumCny,
                shared.CurrencyCodeEnumCny,
                shared.CurrencyCodeEnumCny,
            },
            Descriptions: []string{
                "maiores",
                "dicta",
            },
            Durations: []int64{
                296140,
                480894,
            },
            Filters: []shared.SavingsPlanOfferingFilterElement{
                shared.SavingsPlanOfferingFilterElement{
                    Name: shared.SavingsPlanOfferingFilterAttributeEnumInstanceFamily.ToPointer(),
                    Values: []string{
                        "accusamus",
                        "commodi",
                    },
                },
            },
            MaxResults: sdk.Int64(918236),
            NextToken: sdk.String("quae"),
            OfferingIds: []string{
                "quidem",
            },
            Operations: []string{
                "excepturi",
                "pariatur",
                "modi",
            },
            PaymentOptions: []shared.SavingsPlanPaymentOptionEnum{
                shared.SavingsPlanPaymentOptionEnumPartialUpfront,
                shared.SavingsPlanPaymentOptionEnumNoUpfront,
                shared.SavingsPlanPaymentOptionEnumAllUpfront,
            },
            PlanTypes: []shared.SavingsPlanTypeEnum{
                shared.SavingsPlanTypeEnumEc2Instance,
                shared.SavingsPlanTypeEnumCompute,
                shared.SavingsPlanTypeEnumSageMaker,
                shared.SavingsPlanTypeEnumCompute,
            },
            ProductType: operations.DescribeSavingsPlansOfferingsRequestBodyProductTypeEnumFargate.ToPointer(),
            ServiceCodes: []string{
                "est",
            },
            UsageTypes: []string{
                "explicabo",
                "deserunt",
                "distinctio",
                "quibusdam",
            },
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSavingsPlansOfferingsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags for the specified resource.

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        RequestBody: operations.ListTagsForResourceRequestBody{
            ResourceArn: "magni",
        },
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## TagResource

Adds the specified tags to the specified resource.

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            ResourceArn: "facilis",
            Tags: map[string]string{
                "labore": "delectus",
                "eum": "non",
                "eligendi": "sint",
            },
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("debitis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes the specified tags from the specified resource.

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        RequestBody: operations.UntagResourceRequestBody{
            ResourceArn: "a",
            TagKeys: []string{
                "in",
                "in",
                "illum",
            },
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("facere"),
        XAmzSignedHeaders: sdk.String("ea"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```
