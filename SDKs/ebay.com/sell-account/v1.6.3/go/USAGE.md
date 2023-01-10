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
                    Name: "non",
                },
            },
            Description: "vel",
            FreightShipping: true,
            GlobalShipping: true,
            HandlingTime: &shared.TimeDuration{
                Unit: "magnam",
                Value: 3993979858616336918,
            },
            LocalPickup: true,
            MarketplaceID: "repudiandae",
            Name: "sint",
            PickupDropOff: true,
            ShipToLocations: &shared.RegionSet{
                RegionExcluded: []shared.Region{
                    shared.Region{
                        RegionName: "officia",
                        RegionType: "iusto",
                    },
                },
                RegionIncluded: []shared.Region{
                    shared.Region{
                        RegionName: "qui",
                        RegionType: "enim",
                    },
                    shared.Region{
                        RegionName: "possimus",
                        RegionType: "illo",
                    },
                    shared.Region{
                        RegionName: "minus",
                        RegionType: "voluptatibus",
                    },
                },
            },
            ShippingOptions: []shared.ShippingOption{
                shared.ShippingOption{
                    CostType: "qui",
                    InsuranceFee: &shared.Amount{
                        Currency: "temporibus",
                        Value: "laborum",
                    },
                    InsuranceOffered: true,
                    OptionType: "perferendis",
                    PackageHandlingCost: &shared.Amount{
                        Currency: "dicta",
                        Value: "id",
                    },
                    RateTableID: "amet",
                    ShippingServices: []shared.ShippingService{
                        shared.ShippingService{
                            AdditionalShippingCost: &shared.Amount{
                                Currency: "et",
                                Value: "sapiente",
                            },
                            BuyerResponsibleForPickup: false,
                            BuyerResponsibleForShipping: true,
                            CashOnDeliveryFee: &shared.Amount{
                                Currency: "a",
                                Value: "sit",
                            },
                            FreeShipping: false,
                            ShipToLocations: &shared.RegionSet{
                                RegionExcluded: []shared.Region{
                                    shared.Region{
                                        RegionName: "dolor",
                                        RegionType: "et",
                                    },
                                    shared.Region{
                                        RegionName: "aliquam",
                                        RegionType: "ducimus",
                                    },
                                },
                                RegionIncluded: []shared.Region{
                                    shared.Region{
                                        RegionName: "nemo",
                                        RegionType: "impedit",
                                    },
                                    shared.Region{
                                        RegionName: "est",
                                        RegionType: "quo",
                                    },
                                    shared.Region{
                                        RegionName: "odio",
                                        RegionType: "natus",
                                    },
                                },
                            },
                            ShippingCarrierCode: "corporis",
                            ShippingCost: &shared.Amount{
                                Currency: "accusamus",
                                Value: "vitae",
                            },
                            ShippingServiceCode: "enim",
                            SortOrder: 3786834380851203683,
                            Surcharge: &shared.Amount{
                                Currency: "voluptates",
                                Value: "eos",
                            },
                        },
                        shared.ShippingService{
                            AdditionalShippingCost: &shared.Amount{
                                Currency: "culpa",
                                Value: "omnis",
                            },
                            BuyerResponsibleForPickup: false,
                            BuyerResponsibleForShipping: true,
                            CashOnDeliveryFee: &shared.Amount{
                                Currency: "non",
                                Value: "quis",
                            },
                            FreeShipping: true,
                            ShipToLocations: &shared.RegionSet{
                                RegionExcluded: []shared.Region{
                                    shared.Region{
                                        RegionName: "et",
                                        RegionType: "ut",
                                    },
                                    shared.Region{
                                        RegionName: "distinctio",
                                        RegionType: "exercitationem",
                                    },
                                    shared.Region{
                                        RegionName: "consequatur",
                                        RegionType: "vel",
                                    },
                                },
                                RegionIncluded: []shared.Region{
                                    shared.Region{
                                        RegionName: "et",
                                        RegionType: "error",
                                    },
                                    shared.Region{
                                        RegionName: "nostrum",
                                        RegionType: "non",
                                    },
                                },
                            },
                            ShippingCarrierCode: "aut",
                            ShippingCost: &shared.Amount{
                                Currency: "aut",
                                Value: "voluptatem",
                            },
                            ShippingServiceCode: "quisquam",
                            SortOrder: 5242324670463216349,
                            Surcharge: &shared.Amount{
                                Currency: "architecto",
                                Value: "et",
                            },
                        },
                    },
                },
                shared.ShippingOption{
                    CostType: "reiciendis",
                    InsuranceFee: &shared.Amount{
                        Currency: "laudantium",
                        Value: "in",
                    },
                    InsuranceOffered: false,
                    OptionType: "animi",
                    PackageHandlingCost: &shared.Amount{
                        Currency: "modi",
                        Value: "inventore",
                    },
                    RateTableID: "non",
                    ShippingServices: []shared.ShippingService{
                        shared.ShippingService{
                            AdditionalShippingCost: &shared.Amount{
                                Currency: "laborum",
                                Value: "mollitia",
                            },
                            BuyerResponsibleForPickup: true,
                            BuyerResponsibleForShipping: true,
                            CashOnDeliveryFee: &shared.Amount{
                                Currency: "sint",
                                Value: "autem",
                            },
                            FreeShipping: true,
                            ShipToLocations: &shared.RegionSet{
                                RegionExcluded: []shared.Region{
                                    shared.Region{
                                        RegionName: "laborum",
                                        RegionType: "ut",
                                    },
                                },
                                RegionIncluded: []shared.Region{
                                    shared.Region{
                                        RegionName: "sapiente",
                                        RegionType: "consectetur",
                                    },
                                    shared.Region{
                                        RegionName: "voluptas",
                                        RegionType: "repellendus",
                                    },
                                    shared.Region{
                                        RegionName: "eos",
                                        RegionType: "quasi",
                                    },
                                },
                            },
                            ShippingCarrierCode: "ut",
                            ShippingCost: &shared.Amount{
                                Currency: "suscipit",
                                Value: "maxime",
                            },
                            ShippingServiceCode: "ab",
                            SortOrder: 6652472133678047414,
                            Surcharge: &shared.Amount{
                                Currency: "rem",
                                Value: "recusandae",
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