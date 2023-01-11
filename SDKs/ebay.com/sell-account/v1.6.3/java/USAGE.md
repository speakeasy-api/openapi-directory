<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            CreateFulfillmentPolicyRequest req = new CreateFulfillmentPolicyRequest() {{
                security = new CreateFulfillmentPolicySecurity() {{
                    apiAuth = new SchemeApiAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                request = new FulfillmentPolicyRequest() {{
                    categoryTypes = new openapisdk.models.shared.CategoryType[]() {{
                        add(new CategoryType() {{
                            default_ = false;
                            name = "culpa";
                        }}),
                    }};
                    description = "expedita";
                    freightShipping = true;
                    globalShipping = false;
                    handlingTime = new TimeDuration() {{
                        unit = "expedita";
                        value = 6044372234677422456;
                    }};
                    localPickup = true;
                    marketplaceId = "et";
                    name = "nihil";
                    pickupDropOff = true;
                    shipToLocations = new RegionSet() {{
                        regionExcluded = new openapisdk.models.shared.Region[]() {{
                            add(new Region() {{
                                regionName = "debitis";
                                regionType = "voluptatum";
                            }}),
                            add(new Region() {{
                                regionName = "et";
                                regionType = "ut";
                            }}),
                            add(new Region() {{
                                regionName = "dolorem";
                                regionType = "et";
                            }}),
                        }};
                        regionIncluded = new openapisdk.models.shared.Region[]() {{
                            add(new Region() {{
                                regionName = "iste";
                                regionType = "vitae";
                            }}),
                        }};
                    }};
                    shippingOptions = new openapisdk.models.shared.ShippingOption[]() {{
                        add(new ShippingOption() {{
                            costType = "dolores";
                            insuranceFee = new Amount() {{
                                currency = "illum";
                                value = "debitis";
                            }};
                            insuranceOffered = false;
                            optionType = "odio";
                            packageHandlingCost = new Amount() {{
                                currency = "dolore";
                                value = "id";
                            }};
                            rateTableId = "aspernatur";
                            shippingServices = new openapisdk.models.shared.ShippingService[]() {{
                                add(new ShippingService() {{
                                    additionalShippingCost = new Amount() {{
                                        currency = "totam";
                                        value = "commodi";
                                    }};
                                    buyerResponsibleForPickup = true;
                                    buyerResponsibleForShipping = false;
                                    cashOnDeliveryFee = new Amount() {{
                                        currency = "aut";
                                        value = "odit";
                                    }};
                                    freeShipping = true;
                                    shipToLocations = new RegionSet() {{
                                        regionExcluded = new openapisdk.models.shared.Region[]() {{
                                            add(new Region() {{
                                                regionName = "omnis";
                                                regionType = "aut";
                                            }}),
                                        }};
                                        regionIncluded = new openapisdk.models.shared.Region[]() {{
                                            add(new Region() {{
                                                regionName = "sed";
                                                regionType = "officiis";
                                            }}),
                                        }};
                                    }};
                                    shippingCarrierCode = "autem";
                                    shippingCost = new Amount() {{
                                        currency = "consectetur";
                                        value = "nobis";
                                    }};
                                    shippingServiceCode = "odio";
                                    sortOrder = 7699391924090763411;
                                    surcharge = new Amount() {{
                                        currency = "recusandae";
                                        value = "at";
                                    }};
                                }}),
                                add(new ShippingService() {{
                                    additionalShippingCost = new Amount() {{
                                        currency = "ipsum";
                                        value = "eveniet";
                                    }};
                                    buyerResponsibleForPickup = false;
                                    buyerResponsibleForShipping = true;
                                    cashOnDeliveryFee = new Amount() {{
                                        currency = "inventore";
                                        value = "ut";
                                    }};
                                    freeShipping = false;
                                    shipToLocations = new RegionSet() {{
                                        regionExcluded = new openapisdk.models.shared.Region[]() {{
                                            add(new Region() {{
                                                regionName = "reprehenderit";
                                                regionType = "tempore";
                                            }}),
                                            add(new Region() {{
                                                regionName = "maiores";
                                                regionType = "incidunt";
                                            }}),
                                            add(new Region() {{
                                                regionName = "dolor";
                                                regionType = "beatae";
                                            }}),
                                        }};
                                        regionIncluded = new openapisdk.models.shared.Region[]() {{
                                            add(new Region() {{
                                                regionName = "in";
                                                regionType = "et";
                                            }}),
                                            add(new Region() {{
                                                regionName = "omnis";
                                                regionType = "ipsum";
                                            }}),
                                        }};
                                    }};
                                    shippingCarrierCode = "ex";
                                    shippingCost = new Amount() {{
                                        currency = "dolores";
                                        value = "placeat";
                                    }};
                                    shippingServiceCode = "vel";
                                    sortOrder = 2587000937929698613;
                                    surcharge = new Amount() {{
                                        currency = "mollitia";
                                        value = "voluptas";
                                    }};
                                }}),
                                add(new ShippingService() {{
                                    additionalShippingCost = new Amount() {{
                                        currency = "quam";
                                        value = "reprehenderit";
                                    }};
                                    buyerResponsibleForPickup = true;
                                    buyerResponsibleForShipping = false;
                                    cashOnDeliveryFee = new Amount() {{
                                        currency = "unde";
                                        value = "in";
                                    }};
                                    freeShipping = false;
                                    shipToLocations = new RegionSet() {{
                                        regionExcluded = new openapisdk.models.shared.Region[]() {{
                                            add(new Region() {{
                                                regionName = "ut";
                                                regionType = "itaque";
                                            }}),
                                        }};
                                        regionIncluded = new openapisdk.models.shared.Region[]() {{
                                            add(new Region() {{
                                                regionName = "neque";
                                                regionType = "ullam";
                                            }}),
                                        }};
                                    }};
                                    shippingCarrierCode = "et";
                                    shippingCost = new Amount() {{
                                        currency = "accusantium";
                                        value = "esse";
                                    }};
                                    shippingServiceCode = "architecto";
                                    sortOrder = 9021104375654741729;
                                    surcharge = new Amount() {{
                                        currency = "velit";
                                        value = "cumque";
                                    }};
                                }}),
                            }};
                        }}),
                        add(new ShippingOption() {{
                            costType = "soluta";
                            insuranceFee = new Amount() {{
                                currency = "sunt";
                                value = "voluptates";
                            }};
                            insuranceOffered = false;
                            optionType = "et";
                            packageHandlingCost = new Amount() {{
                                currency = "optio";
                                value = "qui";
                            }};
                            rateTableId = "earum";
                            shippingServices = new openapisdk.models.shared.ShippingService[]() {{
                                add(new ShippingService() {{
                                    additionalShippingCost = new Amount() {{
                                        currency = "omnis";
                                        value = "ut";
                                    }};
                                    buyerResponsibleForPickup = false;
                                    buyerResponsibleForShipping = true;
                                    cashOnDeliveryFee = new Amount() {{
                                        currency = "commodi";
                                        value = "error";
                                    }};
                                    freeShipping = false;
                                    shipToLocations = new RegionSet() {{
                                        regionExcluded = new openapisdk.models.shared.Region[]() {{
                                            add(new Region() {{
                                                regionName = "nostrum";
                                                regionType = "ut";
                                            }}),
                                        }};
                                        regionIncluded = new openapisdk.models.shared.Region[]() {{
                                            add(new Region() {{
                                                regionName = "sed";
                                                regionType = "a";
                                            }}),
                                            add(new Region() {{
                                                regionName = "soluta";
                                                regionType = "aut";
                                            }}),
                                            add(new Region() {{
                                                regionName = "quas";
                                                regionType = "consequuntur";
                                            }}),
                                        }};
                                    }};
                                    shippingCarrierCode = "laudantium";
                                    shippingCost = new Amount() {{
                                        currency = "autem";
                                        value = "ipsa";
                                    }};
                                    shippingServiceCode = "expedita";
                                    sortOrder = 8204648627352676445;
                                    surcharge = new Amount() {{
                                        currency = "perferendis";
                                        value = "atque";
                                    }};
                                }}),
                            }};
                        }}),
                        add(new ShippingOption() {{
                            costType = "ratione";
                            insuranceFee = new Amount() {{
                                currency = "quisquam";
                                value = "explicabo";
                            }};
                            insuranceOffered = true;
                            optionType = "maxime";
                            packageHandlingCost = new Amount() {{
                                currency = "eum";
                                value = "perferendis";
                            }};
                            rateTableId = "et";
                            shippingServices = new openapisdk.models.shared.ShippingService[]() {{
                                add(new ShippingService() {{
                                    additionalShippingCost = new Amount() {{
                                        currency = "reiciendis";
                                        value = "quis";
                                    }};
                                    buyerResponsibleForPickup = true;
                                    buyerResponsibleForShipping = true;
                                    cashOnDeliveryFee = new Amount() {{
                                        currency = "necessitatibus";
                                        value = "est";
                                    }};
                                    freeShipping = true;
                                    shipToLocations = new RegionSet() {{
                                        regionExcluded = new openapisdk.models.shared.Region[]() {{
                                            add(new Region() {{
                                                regionName = "labore";
                                                regionType = "et";
                                            }}),
                                        }};
                                        regionIncluded = new openapisdk.models.shared.Region[]() {{
                                            add(new Region() {{
                                                regionName = "ad";
                                                regionType = "expedita";
                                            }}),
                                            add(new Region() {{
                                                regionName = "vel";
                                                regionType = "qui";
                                            }}),
                                        }};
                                    }};
                                    shippingCarrierCode = "modi";
                                    shippingCost = new Amount() {{
                                        currency = "nihil";
                                        value = "tempora";
                                    }};
                                    shippingServiceCode = "deserunt";
                                    sortOrder = 4745905187492708501;
                                    surcharge = new Amount() {{
                                        currency = "sunt";
                                        value = "sit";
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                }};
            }};

            CreateFulfillmentPolicyResponse res = sdk.fulfillmentPolicy.createFulfillmentPolicy(req);

            if (res.setFulfillmentPolicyResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->