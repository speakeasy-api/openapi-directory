<!-- Start SDK Example Usage -->
```go
package main

import (
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
                    Default: true,
                    Name: "quas",
                },
                shared.CategoryType{
                    Default: true,
                    Name: "quae",
                },
                shared.CategoryType{
                    Default: false,
                    Name: "molestiae",
                },
            },
            Description: "sed",
            FreightShipping: true,
            GlobalShipping: false,
            HandlingTime: &shared.TimeDuration{
                Unit: "ipsa",
                Value: 3100161270969178692,
            },
            LocalPickup: false,
            MarketplaceID: "earum",
            Name: "ad",
            PickupDropOff: false,
            ShipToLocations: &shared.RegionSet{
                RegionExcluded: []shared.Region{
                    shared.Region{
                        RegionName: "eum",
                        RegionType: "nihil",
                    },
                },
                RegionIncluded: []shared.Region{
                    shared.Region{
                        RegionName: "eos",
                        RegionType: "est",
                    },
                },
            },
            ShippingOptions: []shared.ShippingOption{
                shared.ShippingOption{
                    CostType: "dolor",
                    InsuranceFee: &shared.Amount{
                        Currency: "omnis",
                        Value: "itaque",
                    },
                    InsuranceOffered: false,
                    OptionType: "nihil",
                    PackageHandlingCost: &shared.Amount{
                        Currency: "quae",
                        Value: "cupiditate",
                    },
                    RateTableID: "sapiente",
                    ShippingServices: []shared.ShippingService{
                        shared.ShippingService{
                            AdditionalShippingCost: &shared.Amount{
                                Currency: "perferendis",
                                Value: "maiores",
                            },
                            BuyerResponsibleForPickup: false,
                            BuyerResponsibleForShipping: false,
                            CashOnDeliveryFee: &shared.Amount{
                                Currency: "sint",
                                Value: "vero",
                            },
                            FreeShipping: true,
                            ShipToLocations: &shared.RegionSet{
                                RegionExcluded: []shared.Region{
                                    shared.Region{
                                        RegionName: "suscipit",
                                        RegionType: "laudantium",
                                    },
                                    shared.Region{
                                        RegionName: "in",
                                        RegionType: "dicta",
                                    },
                                },
                                RegionIncluded: []shared.Region{
                                    shared.Region{
                                        RegionName: "nulla",
                                        RegionType: "reiciendis",
                                    },
                                    shared.Region{
                                        RegionName: "qui",
                                        RegionType: "fuga",
                                    },
                                    shared.Region{
                                        RegionName: "sed",
                                        RegionType: "sed",
                                    },
                                },
                            },
                            ShippingCarrierCode: "velit",
                            ShippingCost: &shared.Amount{
                                Currency: "consequatur",
                                Value: "reiciendis",
                            },
                            ShippingServiceCode: "perspiciatis",
                            SortOrder: 1388707321660843379,
                            Surcharge: &shared.Amount{
                                Currency: "earum",
                                Value: "perferendis",
                            },
                        },
                        shared.ShippingService{
                            AdditionalShippingCost: &shared.Amount{
                                Currency: "ea",
                                Value: "adipisci",
                            },
                            BuyerResponsibleForPickup: true,
                            BuyerResponsibleForShipping: true,
                            CashOnDeliveryFee: &shared.Amount{
                                Currency: "neque",
                                Value: "non",
                            },
                            FreeShipping: true,
                            ShipToLocations: &shared.RegionSet{
                                RegionExcluded: []shared.Region{
                                    shared.Region{
                                        RegionName: "quos",
                                        RegionType: "natus",
                                    },
                                    shared.Region{
                                        RegionName: "porro",
                                        RegionType: "dolorem",
                                    },
                                    shared.Region{
                                        RegionName: "earum",
                                        RegionType: "itaque",
                                    },
                                },
                                RegionIncluded: []shared.Region{
                                    shared.Region{
                                        RegionName: "voluptas",
                                        RegionType: "eos",
                                    },
                                    shared.Region{
                                        RegionName: "deleniti",
                                        RegionType: "ut",
                                    },
                                    shared.Region{
                                        RegionName: "corporis",
                                        RegionType: "enim",
                                    },
                                },
                            },
                            ShippingCarrierCode: "quia",
                            ShippingCost: &shared.Amount{
                                Currency: "autem",
                                Value: "aliquam",
                            },
                            ShippingServiceCode: "beatae",
                            SortOrder: 5214741030275331448,
                            Surcharge: &shared.Amount{
                                Currency: "enim",
                                Value: "facere",
                            },
                        },
                        shared.ShippingService{
                            AdditionalShippingCost: &shared.Amount{
                                Currency: "est",
                                Value: "quod",
                            },
                            BuyerResponsibleForPickup: false,
                            BuyerResponsibleForShipping: true,
                            CashOnDeliveryFee: &shared.Amount{
                                Currency: "ullam",
                                Value: "consequuntur",
                            },
                            FreeShipping: true,
                            ShipToLocations: &shared.RegionSet{
                                RegionExcluded: []shared.Region{
                                    shared.Region{
                                        RegionName: "quo",
                                        RegionType: "aperiam",
                                    },
                                },
                                RegionIncluded: []shared.Region{
                                    shared.Region{
                                        RegionName: "qui",
                                        RegionType: "tenetur",
                                    },
                                    shared.Region{
                                        RegionName: "labore",
                                        RegionType: "eaque",
                                    },
                                    shared.Region{
                                        RegionName: "quidem",
                                        RegionType: "neque",
                                    },
                                },
                            },
                            ShippingCarrierCode: "qui",
                            ShippingCost: &shared.Amount{
                                Currency: "quisquam",
                                Value: "nisi",
                            },
                            ShippingServiceCode: "aut",
                            SortOrder: 1359069636741174088,
                            Surcharge: &shared.Amount{
                                Currency: "laudantium",
                                Value: "nostrum",
                            },
                        },
                    },
                },
            },
        },
    }
    
    res, err := s.FulfillmentPolicy.CreateFulfillmentPolicy(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SetFulfillmentPolicyResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->