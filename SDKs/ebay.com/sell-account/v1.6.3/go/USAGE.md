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
                    Default: false,
                    Name: "culpa",
                },
            },
            Description: "expedita",
            FreightShipping: true,
            GlobalShipping: false,
            HandlingTime: &shared.TimeDuration{
                Unit: "expedita",
                Value: 6044372234677422456,
            },
            LocalPickup: true,
            MarketplaceID: "et",
            Name: "nihil",
            PickupDropOff: true,
            ShipToLocations: &shared.RegionSet{
                RegionExcluded: []shared.Region{
                    shared.Region{
                        RegionName: "debitis",
                        RegionType: "voluptatum",
                    },
                    shared.Region{
                        RegionName: "et",
                        RegionType: "ut",
                    },
                    shared.Region{
                        RegionName: "dolorem",
                        RegionType: "et",
                    },
                },
                RegionIncluded: []shared.Region{
                    shared.Region{
                        RegionName: "iste",
                        RegionType: "vitae",
                    },
                },
            },
            ShippingOptions: []shared.ShippingOption{
                shared.ShippingOption{
                    CostType: "dolores",
                    InsuranceFee: &shared.Amount{
                        Currency: "illum",
                        Value: "debitis",
                    },
                    InsuranceOffered: false,
                    OptionType: "odio",
                    PackageHandlingCost: &shared.Amount{
                        Currency: "dolore",
                        Value: "id",
                    },
                    RateTableID: "aspernatur",
                    ShippingServices: []shared.ShippingService{
                        shared.ShippingService{
                            AdditionalShippingCost: &shared.Amount{
                                Currency: "totam",
                                Value: "commodi",
                            },
                            BuyerResponsibleForPickup: true,
                            BuyerResponsibleForShipping: false,
                            CashOnDeliveryFee: &shared.Amount{
                                Currency: "aut",
                                Value: "odit",
                            },
                            FreeShipping: true,
                            ShipToLocations: &shared.RegionSet{
                                RegionExcluded: []shared.Region{
                                    shared.Region{
                                        RegionName: "omnis",
                                        RegionType: "aut",
                                    },
                                },
                                RegionIncluded: []shared.Region{
                                    shared.Region{
                                        RegionName: "sed",
                                        RegionType: "officiis",
                                    },
                                },
                            },
                            ShippingCarrierCode: "autem",
                            ShippingCost: &shared.Amount{
                                Currency: "consectetur",
                                Value: "nobis",
                            },
                            ShippingServiceCode: "odio",
                            SortOrder: 7699391924090763411,
                            Surcharge: &shared.Amount{
                                Currency: "recusandae",
                                Value: "at",
                            },
                        },
                        shared.ShippingService{
                            AdditionalShippingCost: &shared.Amount{
                                Currency: "ipsum",
                                Value: "eveniet",
                            },
                            BuyerResponsibleForPickup: false,
                            BuyerResponsibleForShipping: true,
                            CashOnDeliveryFee: &shared.Amount{
                                Currency: "inventore",
                                Value: "ut",
                            },
                            FreeShipping: false,
                            ShipToLocations: &shared.RegionSet{
                                RegionExcluded: []shared.Region{
                                    shared.Region{
                                        RegionName: "reprehenderit",
                                        RegionType: "tempore",
                                    },
                                    shared.Region{
                                        RegionName: "maiores",
                                        RegionType: "incidunt",
                                    },
                                    shared.Region{
                                        RegionName: "dolor",
                                        RegionType: "beatae",
                                    },
                                },
                                RegionIncluded: []shared.Region{
                                    shared.Region{
                                        RegionName: "in",
                                        RegionType: "et",
                                    },
                                    shared.Region{
                                        RegionName: "omnis",
                                        RegionType: "ipsum",
                                    },
                                },
                            },
                            ShippingCarrierCode: "ex",
                            ShippingCost: &shared.Amount{
                                Currency: "dolores",
                                Value: "placeat",
                            },
                            ShippingServiceCode: "vel",
                            SortOrder: 2587000937929698613,
                            Surcharge: &shared.Amount{
                                Currency: "mollitia",
                                Value: "voluptas",
                            },
                        },
                        shared.ShippingService{
                            AdditionalShippingCost: &shared.Amount{
                                Currency: "quam",
                                Value: "reprehenderit",
                            },
                            BuyerResponsibleForPickup: true,
                            BuyerResponsibleForShipping: false,
                            CashOnDeliveryFee: &shared.Amount{
                                Currency: "unde",
                                Value: "in",
                            },
                            FreeShipping: false,
                            ShipToLocations: &shared.RegionSet{
                                RegionExcluded: []shared.Region{
                                    shared.Region{
                                        RegionName: "ut",
                                        RegionType: "itaque",
                                    },
                                },
                                RegionIncluded: []shared.Region{
                                    shared.Region{
                                        RegionName: "neque",
                                        RegionType: "ullam",
                                    },
                                },
                            },
                            ShippingCarrierCode: "et",
                            ShippingCost: &shared.Amount{
                                Currency: "accusantium",
                                Value: "esse",
                            },
                            ShippingServiceCode: "architecto",
                            SortOrder: 9021104375654741729,
                            Surcharge: &shared.Amount{
                                Currency: "velit",
                                Value: "cumque",
                            },
                        },
                    },
                },
                shared.ShippingOption{
                    CostType: "soluta",
                    InsuranceFee: &shared.Amount{
                        Currency: "sunt",
                        Value: "voluptates",
                    },
                    InsuranceOffered: false,
                    OptionType: "et",
                    PackageHandlingCost: &shared.Amount{
                        Currency: "optio",
                        Value: "qui",
                    },
                    RateTableID: "earum",
                    ShippingServices: []shared.ShippingService{
                        shared.ShippingService{
                            AdditionalShippingCost: &shared.Amount{
                                Currency: "omnis",
                                Value: "ut",
                            },
                            BuyerResponsibleForPickup: false,
                            BuyerResponsibleForShipping: true,
                            CashOnDeliveryFee: &shared.Amount{
                                Currency: "commodi",
                                Value: "error",
                            },
                            FreeShipping: false,
                            ShipToLocations: &shared.RegionSet{
                                RegionExcluded: []shared.Region{
                                    shared.Region{
                                        RegionName: "nostrum",
                                        RegionType: "ut",
                                    },
                                },
                                RegionIncluded: []shared.Region{
                                    shared.Region{
                                        RegionName: "sed",
                                        RegionType: "a",
                                    },
                                    shared.Region{
                                        RegionName: "soluta",
                                        RegionType: "aut",
                                    },
                                    shared.Region{
                                        RegionName: "quas",
                                        RegionType: "consequuntur",
                                    },
                                },
                            },
                            ShippingCarrierCode: "laudantium",
                            ShippingCost: &shared.Amount{
                                Currency: "autem",
                                Value: "ipsa",
                            },
                            ShippingServiceCode: "expedita",
                            SortOrder: 8204648627352676445,
                            Surcharge: &shared.Amount{
                                Currency: "perferendis",
                                Value: "atque",
                            },
                        },
                    },
                },
                shared.ShippingOption{
                    CostType: "ratione",
                    InsuranceFee: &shared.Amount{
                        Currency: "quisquam",
                        Value: "explicabo",
                    },
                    InsuranceOffered: true,
                    OptionType: "maxime",
                    PackageHandlingCost: &shared.Amount{
                        Currency: "eum",
                        Value: "perferendis",
                    },
                    RateTableID: "et",
                    ShippingServices: []shared.ShippingService{
                        shared.ShippingService{
                            AdditionalShippingCost: &shared.Amount{
                                Currency: "reiciendis",
                                Value: "quis",
                            },
                            BuyerResponsibleForPickup: true,
                            BuyerResponsibleForShipping: true,
                            CashOnDeliveryFee: &shared.Amount{
                                Currency: "necessitatibus",
                                Value: "est",
                            },
                            FreeShipping: true,
                            ShipToLocations: &shared.RegionSet{
                                RegionExcluded: []shared.Region{
                                    shared.Region{
                                        RegionName: "labore",
                                        RegionType: "et",
                                    },
                                },
                                RegionIncluded: []shared.Region{
                                    shared.Region{
                                        RegionName: "ad",
                                        RegionType: "expedita",
                                    },
                                    shared.Region{
                                        RegionName: "vel",
                                        RegionType: "qui",
                                    },
                                },
                            },
                            ShippingCarrierCode: "modi",
                            ShippingCost: &shared.Amount{
                                Currency: "nihil",
                                Value: "tempora",
                            },
                            ShippingServiceCode: "deserunt",
                            SortOrder: 4745905187492708501,
                            Surcharge: &shared.Amount{
                                Currency: "sunt",
                                Value: "sit",
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