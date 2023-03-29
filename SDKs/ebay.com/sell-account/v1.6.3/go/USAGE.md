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
    s := sdk.New()

    req := operations.CreateFulfillmentPolicyRequest{
        Security: operations.CreateFulfillmentPolicySecurity{
            APIAuth: shared.SchemeAPIAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        Request: shared.FulfillmentPolicyRequest{
            CategoryTypes: []shared.CategoryType{
                shared.CategoryType{
                    Default: false,
                    Name: "deserunt",
                },
                shared.CategoryType{
                    Default: false,
                    Name: "porro",
                },
                shared.CategoryType{
                    Default: false,
                    Name: "nulla",
                },
            },
            Description: "id",
            FreightShipping: false,
            GlobalShipping: false,
            HandlingTime: &shared.TimeDuration{
                Unit: "vero",
                Value: 544883,
            },
            LocalPickup: false,
            MarketplaceID: "nulla",
            Name: "nihil",
            PickupDropOff: false,
            ShipToLocations: &shared.RegionSet{
                RegionExcluded: []shared.Region{
                    shared.Region{
                        RegionName: "facilis",
                        RegionType: "eum",
                    },
                    shared.Region{
                        RegionName: "iusto",
                        RegionType: "ullam",
                    },
                    shared.Region{
                        RegionName: "saepe",
                        RegionType: "inventore",
                    },
                },
                RegionIncluded: []shared.Region{
                    shared.Region{
                        RegionName: "enim",
                        RegionType: "eum",
                    },
                    shared.Region{
                        RegionName: "voluptatum",
                        RegionType: "autem",
                    },
                    shared.Region{
                        RegionName: "vel",
                        RegionType: "non",
                    },
                    shared.Region{
                        RegionName: "deleniti",
                        RegionType: "similique",
                    },
                },
            },
            ShippingOptions: []shared.ShippingOption{
                shared.ShippingOption{
                    CostType: "molestiae",
                    InsuranceFee: &shared.Amount{
                        Currency: "quo",
                        Value: "quasi",
                    },
                    InsuranceOffered: false,
                    OptionType: "laboriosam",
                    PackageHandlingCost: &shared.Amount{
                        Currency: "dicta",
                        Value: "est",
                    },
                    RateTableID: "voluptatem",
                    ShippingServices: []shared.ShippingService{
                        shared.ShippingService{
                            AdditionalShippingCost: &shared.Amount{
                                Currency: "fugiat",
                                Value: "a",
                            },
                            BuyerResponsibleForPickup: false,
                            BuyerResponsibleForShipping: false,
                            CashOnDeliveryFee: &shared.Amount{
                                Currency: "omnis",
                                Value: "eos",
                            },
                            FreeShipping: false,
                            ShipToLocations: &shared.RegionSet{
                                RegionExcluded: []shared.Region{
                                    shared.Region{
                                        RegionName: "accusamus",
                                        RegionType: "reiciendis",
                                    },
                                    shared.Region{
                                        RegionName: "rem",
                                        RegionType: "quibusdam",
                                    },
                                    shared.Region{
                                        RegionName: "et",
                                        RegionType: "praesentium",
                                    },
                                    shared.Region{
                                        RegionName: "occaecati",
                                        RegionType: "dolor",
                                    },
                                },
                                RegionIncluded: []shared.Region{
                                    shared.Region{
                                        RegionName: "sed",
                                        RegionType: "quisquam",
                                    },
                                    shared.Region{
                                        RegionName: "rerum",
                                        RegionType: "culpa",
                                    },
                                    shared.Region{
                                        RegionName: "qui",
                                        RegionType: "sed",
                                    },
                                },
                            },
                            ShippingCarrierCode: "rerum",
                            ShippingCost: &shared.Amount{
                                Currency: "possimus",
                                Value: "occaecati",
                            },
                            ShippingServiceCode: "odit",
                            SortOrder: 414662,
                            Surcharge: &shared.Amount{
                                Currency: "rem",
                                Value: "voluptatem",
                            },
                        },
                        shared.ShippingService{
                            AdditionalShippingCost: &shared.Amount{
                                Currency: "amet",
                                Value: "est",
                            },
                            BuyerResponsibleForPickup: false,
                            BuyerResponsibleForShipping: false,
                            CashOnDeliveryFee: &shared.Amount{
                                Currency: "id",
                                Value: "blanditiis",
                            },
                            FreeShipping: false,
                            ShipToLocations: &shared.RegionSet{
                                RegionExcluded: []shared.Region{
                                    shared.Region{
                                        RegionName: "similique",
                                        RegionType: "dolores",
                                    },
                                },
                                RegionIncluded: []shared.Region{
                                    shared.Region{
                                        RegionName: "quia",
                                        RegionType: "et",
                                    },
                                },
                            },
                            ShippingCarrierCode: "voluptatem",
                            ShippingCost: &shared.Amount{
                                Currency: "laborum",
                                Value: "modi",
                            },
                            ShippingServiceCode: "et",
                            SortOrder: 386489,
                            Surcharge: &shared.Amount{
                                Currency: "earum",
                                Value: "ut",
                            },
                        },
                    },
                },
                shared.ShippingOption{
                    CostType: "soluta",
                    InsuranceFee: &shared.Amount{
                        Currency: "qui",
                        Value: "ea",
                    },
                    InsuranceOffered: false,
                    OptionType: "laborum",
                    PackageHandlingCost: &shared.Amount{
                        Currency: "iusto",
                        Value: "ut",
                    },
                    RateTableID: "optio",
                    ShippingServices: []shared.ShippingService{
                        shared.ShippingService{
                            AdditionalShippingCost: &shared.Amount{
                                Currency: "inventore",
                                Value: "ut",
                            },
                            BuyerResponsibleForPickup: false,
                            BuyerResponsibleForShipping: false,
                            CashOnDeliveryFee: &shared.Amount{
                                Currency: "libero",
                                Value: "et",
                            },
                            FreeShipping: false,
                            ShipToLocations: &shared.RegionSet{
                                RegionExcluded: []shared.Region{
                                    shared.Region{
                                        RegionName: "ipsum",
                                        RegionType: "non",
                                    },
                                    shared.Region{
                                        RegionName: "ea",
                                        RegionType: "magni",
                                    },
                                    shared.Region{
                                        RegionName: "placeat",
                                        RegionType: "ipsam",
                                    },
                                },
                                RegionIncluded: []shared.Region{
                                    shared.Region{
                                        RegionName: "commodi",
                                        RegionType: "quia",
                                    },
                                    shared.Region{
                                        RegionName: "similique",
                                        RegionType: "eaque",
                                    },
                                    shared.Region{
                                        RegionName: "odio",
                                        RegionType: "harum",
                                    },
                                },
                            },
                            ShippingCarrierCode: "doloribus",
                            ShippingCost: &shared.Amount{
                                Currency: "a",
                                Value: "aut",
                            },
                            ShippingServiceCode: "et",
                            SortOrder: 208876,
                            Surcharge: &shared.Amount{
                                Currency: "quidem",
                                Value: "neque",
                            },
                        },
                    },
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.FulfillmentPolicy.CreateFulfillmentPolicy(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SetFulfillmentPolicyResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->