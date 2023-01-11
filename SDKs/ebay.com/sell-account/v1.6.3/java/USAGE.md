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
                            default_ = true;
                            name = "vel";
                        }}),
                        add(new CategoryType() {{
                            default_ = false;
                            name = "dolore";
                        }}),
                        add(new CategoryType() {{
                            default_ = false;
                            name = "aspernatur";
                        }}),
                    }};
                    description = "accusantium";
                    freightShipping = false;
                    globalShipping = false;
                    handlingTime = new TimeDuration() {{
                        unit = "quis";
                        value = 3398579248012586914;
                    }};
                    localPickup = true;
                    marketplaceId = "odit";
                    name = "non";
                    pickupDropOff = false;
                    shipToLocations = new RegionSet() {{
                        regionExcluded = new openapisdk.models.shared.Region[]() {{
                            add(new Region() {{
                                regionName = "aut";
                                regionType = "illo";
                            }}),
                            add(new Region() {{
                                regionName = "sed";
                                regionType = "officiis";
                            }}),
                        }};
                        regionIncluded = new openapisdk.models.shared.Region[]() {{
                            add(new Region() {{
                                regionName = "consectetur";
                                regionType = "nobis";
                            }}),
                            add(new Region() {{
                                regionName = "odio";
                                regionType = "qui";
                            }}),
                        }};
                    }};
                    shippingOptions = new openapisdk.models.shared.ShippingOption[]() {{
                        add(new ShippingOption() {{
                            costType = "at";
                            insuranceFee = new Amount() {{
                                currency = "ipsum";
                                value = "eveniet";
                            }};
                            insuranceOffered = false;
                            optionType = "sint";
                            packageHandlingCost = new Amount() {{
                                currency = "inventore";
                                value = "ut";
                            }};
                            rateTableId = "exercitationem";
                            shippingServices = new openapisdk.models.shared.ShippingService[]() {{
                                add(new ShippingService() {{
                                    additionalShippingCost = new Amount() {{
                                        currency = "reprehenderit";
                                        value = "tempore";
                                    }};
                                    buyerResponsibleForPickup = false;
                                    buyerResponsibleForShipping = false;
                                    cashOnDeliveryFee = new Amount() {{
                                        currency = "dolor";
                                        value = "beatae";
                                    }};
                                    freeShipping = true;
                                    shipToLocations = new RegionSet() {{
                                        regionExcluded = new openapisdk.models.shared.Region[]() {{
                                            add(new Region() {{
                                                regionName = "et";
                                                regionType = "omnis";
                                            }}),
                                            add(new Region() {{
                                                regionName = "ipsum";
                                                regionType = "ex";
                                            }}),
                                            add(new Region() {{
                                                regionName = "dolores";
                                                regionType = "placeat";
                                            }}),
                                        }};
                                        regionIncluded = new openapisdk.models.shared.Region[]() {{
                                            add(new Region() {{
                                                regionName = "rerum";
                                                regionType = "mollitia";
                                            }}),
                                            add(new Region() {{
                                                regionName = "voluptas";
                                                regionType = "quam";
                                            }}),
                                        }};
                                    }};
                                    shippingCarrierCode = "reprehenderit";
                                    shippingCost = new Amount() {{
                                        currency = "qui";
                                        value = "qui";
                                    }};
                                    shippingServiceCode = "unde";
                                    sortOrder = 7663837986485606015;
                                    surcharge = new Amount() {{
                                        currency = "autem";
                                        value = "qui";
                                    }};
                                }}),
                                add(new ShippingService() {{
                                    additionalShippingCost = new Amount() {{
                                        currency = "ut";
                                        value = "itaque";
                                    }};
                                    buyerResponsibleForPickup = false;
                                    buyerResponsibleForShipping = false;
                                    cashOnDeliveryFee = new Amount() {{
                                        currency = "ullam";
                                        value = "et";
                                    }};
                                    freeShipping = false;
                                    shipToLocations = new RegionSet() {{
                                        regionExcluded = new openapisdk.models.shared.Region[]() {{
                                            add(new Region() {{
                                                regionName = "architecto";
                                                regionType = "quam";
                                            }}),
                                            add(new Region() {{
                                                regionName = "velit";
                                                regionType = "cumque";
                                            }}),
                                        }};
                                        regionIncluded = new openapisdk.models.shared.Region[]() {{
                                            add(new Region() {{
                                                regionName = "sunt";
                                                regionType = "voluptates";
                                            }}),
                                        }};
                                    }};
                                    shippingCarrierCode = "magni";
                                    shippingCost = new Amount() {{
                                        currency = "et";
                                        value = "optio";
                                    }};
                                    shippingServiceCode = "qui";
                                    sortOrder = 7862762095958642309;
                                    surcharge = new Amount() {{
                                        currency = "illo";
                                        value = "omnis";
                                    }};
                                }}),
                                add(new ShippingService() {{
                                    additionalShippingCost = new Amount() {{
                                        currency = "ut";
                                        value = "consequatur";
                                    }};
                                    buyerResponsibleForPickup = true;
                                    buyerResponsibleForShipping = true;
                                    cashOnDeliveryFee = new Amount() {{
                                        currency = "error";
                                        value = "reprehenderit";
                                    }};
                                    freeShipping = false;
                                    shipToLocations = new RegionSet() {{
                                        regionExcluded = new openapisdk.models.shared.Region[]() {{
                                            add(new Region() {{
                                                regionName = "ut";
                                                regionType = "laboriosam";
                                            }}),
                                        }};
                                        regionIncluded = new openapisdk.models.shared.Region[]() {{
                                            add(new Region() {{
                                                regionName = "a";
                                                regionType = "soluta";
                                            }}),
                                            add(new Region() {{
                                                regionName = "aut";
                                                regionType = "quas";
                                            }}),
                                            add(new Region() {{
                                                regionName = "consequuntur";
                                                regionType = "laudantium";
                                            }}),
                                        }};
                                    }};
                                    shippingCarrierCode = "autem";
                                    shippingCost = new Amount() {{
                                        currency = "ipsa";
                                        value = "expedita";
                                    }};
                                    shippingServiceCode = "doloremque";
                                    sortOrder = 4234137922270959652;
                                    surcharge = new Amount() {{
                                        currency = "atque";
                                        value = "ratione";
                                    }};
                                }}),
                            }};
                        }}),
                        add(new ShippingOption() {{
                            costType = "quisquam";
                            insuranceFee = new Amount() {{
                                currency = "explicabo";
                                value = "ea";
                            }};
                            insuranceOffered = true;
                            optionType = "eum";
                            packageHandlingCost = new Amount() {{
                                currency = "perferendis";
                                value = "et";
                            }};
                            rateTableId = "rerum";
                            shippingServices = new openapisdk.models.shared.ShippingService[]() {{
                                add(new ShippingService() {{
                                    additionalShippingCost = new Amount() {{
                                        currency = "quis";
                                        value = "cumque";
                                    }};
                                    buyerResponsibleForPickup = true;
                                    buyerResponsibleForShipping = false;
                                    cashOnDeliveryFee = new Amount() {{
                                        currency = "est";
                                        value = "quis";
                                    }};
                                    freeShipping = true;
                                    shipToLocations = new RegionSet() {{
                                        regionExcluded = new openapisdk.models.shared.Region[]() {{
                                            add(new Region() {{
                                                regionName = "et";
                                                regionType = "impedit";
                                            }}),
                                        }};
                                        regionIncluded = new openapisdk.models.shared.Region[]() {{
                                            add(new Region() {{
                                                regionName = "expedita";
                                                regionType = "vel";
                                            }}),
                                            add(new Region() {{
                                                regionName = "qui";
                                                regionType = "modi";
                                            }}),
                                            add(new Region() {{
                                                regionName = "nihil";
                                                regionType = "tempora";
                                            }}),
                                        }};
                                    }};
                                    shippingCarrierCode = "deserunt";
                                    shippingCost = new Amount() {{
                                        currency = "eaque";
                                        value = "sunt";
                                    }};
                                    shippingServiceCode = "sit";
                                    sortOrder = 2867593906384393455;
                                    surcharge = new Amount() {{
                                        currency = "quis";
                                        value = "vel";
                                    }};
                                }}),
                                add(new ShippingService() {{
                                    additionalShippingCost = new Amount() {{
                                        currency = "vel";
                                        value = "placeat";
                                    }};
                                    buyerResponsibleForPickup = true;
                                    buyerResponsibleForShipping = false;
                                    cashOnDeliveryFee = new Amount() {{
                                        currency = "quis";
                                        value = "adipisci";
                                    }};
                                    freeShipping = false;
                                    shipToLocations = new RegionSet() {{
                                        regionExcluded = new openapisdk.models.shared.Region[]() {{
                                            add(new Region() {{
                                                regionName = "et";
                                                regionType = "accusamus";
                                            }}),
                                            add(new Region() {{
                                                regionName = "numquam";
                                                regionType = "laborum";
                                            }}),
                                            add(new Region() {{
                                                regionName = "rerum";
                                                regionType = "ut";
                                            }}),
                                        }};
                                        regionIncluded = new openapisdk.models.shared.Region[]() {{
                                            add(new Region() {{
                                                regionName = "fugit";
                                                regionType = "quis";
                                            }}),
                                            add(new Region() {{
                                                regionName = "minus";
                                                regionType = "soluta";
                                            }}),
                                            add(new Region() {{
                                                regionName = "aperiam";
                                                regionType = "consequuntur";
                                            }}),
                                        }};
                                    }};
                                    shippingCarrierCode = "excepturi";
                                    shippingCost = new Amount() {{
                                        currency = "mollitia";
                                        value = "inventore";
                                    }};
                                    shippingServiceCode = "delectus";
                                    sortOrder = 4283016341703943597;
                                    surcharge = new Amount() {{
                                        currency = "animi";
                                        value = "animi";
                                    }};
                                }}),
                                add(new ShippingService() {{
                                    additionalShippingCost = new Amount() {{
                                        currency = "ut";
                                        value = "aliquam";
                                    }};
                                    buyerResponsibleForPickup = false;
                                    buyerResponsibleForShipping = false;
                                    cashOnDeliveryFee = new Amount() {{
                                        currency = "sed";
                                        value = "et";
                                    }};
                                    freeShipping = true;
                                    shipToLocations = new RegionSet() {{
                                        regionExcluded = new openapisdk.models.shared.Region[]() {{
                                            add(new Region() {{
                                                regionName = "cupiditate";
                                                regionType = "provident";
                                            }}),
                                            add(new Region() {{
                                                regionName = "molestiae";
                                                regionType = "pariatur";
                                            }}),
                                            add(new Region() {{
                                                regionName = "quasi";
                                                regionType = "corrupti";
                                            }}),
                                        }};
                                        regionIncluded = new openapisdk.models.shared.Region[]() {{
                                            add(new Region() {{
                                                regionName = "qui";
                                                regionType = "sit";
                                            }}),
                                            add(new Region() {{
                                                regionName = "possimus";
                                                regionType = "modi";
                                            }}),
                                        }};
                                    }};
                                    shippingCarrierCode = "neque";
                                    shippingCost = new Amount() {{
                                        currency = "consequuntur";
                                        value = "quia";
                                    }};
                                    shippingServiceCode = "et";
                                    sortOrder = 1613338873740606132;
                                    surcharge = new Amount() {{
                                        currency = "occaecati";
                                        value = "ex";
                                    }};
                                }}),
                            }};
                        }}),
                        add(new ShippingOption() {{
                            costType = "voluptatem";
                            insuranceFee = new Amount() {{
                                currency = "quia";
                                value = "temporibus";
                            }};
                            insuranceOffered = false;
                            optionType = "quae";
                            packageHandlingCost = new Amount() {{
                                currency = "est";
                                value = "ut";
                            }};
                            rateTableId = "necessitatibus";
                            shippingServices = new openapisdk.models.shared.ShippingService[]() {{
                                add(new ShippingService() {{
                                    additionalShippingCost = new Amount() {{
                                        currency = "possimus";
                                        value = "voluptatem";
                                    }};
                                    buyerResponsibleForPickup = true;
                                    buyerResponsibleForShipping = true;
                                    cashOnDeliveryFee = new Amount() {{
                                        currency = "saepe";
                                        value = "sunt";
                                    }};
                                    freeShipping = true;
                                    shipToLocations = new RegionSet() {{
                                        regionExcluded = new openapisdk.models.shared.Region[]() {{
                                            add(new Region() {{
                                                regionName = "ut";
                                                regionType = "asperiores";
                                            }}),
                                            add(new Region() {{
                                                regionName = "et";
                                                regionType = "est";
                                            }}),
                                        }};
                                        regionIncluded = new openapisdk.models.shared.Region[]() {{
                                            add(new Region() {{
                                                regionName = "quam";
                                                regionType = "voluptas";
                                            }}),
                                        }};
                                    }};
                                    shippingCarrierCode = "nihil";
                                    shippingCost = new Amount() {{
                                        currency = "dolores";
                                        value = "suscipit";
                                    }};
                                    shippingServiceCode = "impedit";
                                    sortOrder = 3752781218885968701;
                                    surcharge = new Amount() {{
                                        currency = "magnam";
                                        value = "ut";
                                    }};
                                }}),
                                add(new ShippingService() {{
                                    additionalShippingCost = new Amount() {{
                                        currency = "possimus";
                                        value = "illo";
                                    }};
                                    buyerResponsibleForPickup = true;
                                    buyerResponsibleForShipping = false;
                                    cashOnDeliveryFee = new Amount() {{
                                        currency = "ipsam";
                                        value = "ducimus";
                                    }};
                                    freeShipping = false;
                                    shipToLocations = new RegionSet() {{
                                        regionExcluded = new openapisdk.models.shared.Region[]() {{
                                            add(new Region() {{
                                                regionName = "distinctio";
                                                regionType = "delectus";
                                            }}),
                                            add(new Region() {{
                                                regionName = "rerum";
                                                regionType = "dolore";
                                            }}),
                                        }};
                                        regionIncluded = new openapisdk.models.shared.Region[]() {{
                                            add(new Region() {{
                                                regionName = "velit";
                                                regionType = "officia";
                                            }}),
                                        }};
                                    }};
                                    shippingCarrierCode = "modi";
                                    shippingCost = new Amount() {{
                                        currency = "sunt";
                                        value = "voluptas";
                                    }};
                                    shippingServiceCode = "amet";
                                    sortOrder = 8268186752735240934;
                                    surcharge = new Amount() {{
                                        currency = "a";
                                        value = "qui";
                                    }};
                                }}),
                                add(new ShippingService() {{
                                    additionalShippingCost = new Amount() {{
                                        currency = "excepturi";
                                        value = "autem";
                                    }};
                                    buyerResponsibleForPickup = false;
                                    buyerResponsibleForShipping = false;
                                    cashOnDeliveryFee = new Amount() {{
                                        currency = "rem";
                                        value = "doloremque";
                                    }};
                                    freeShipping = false;
                                    shipToLocations = new RegionSet() {{
                                        regionExcluded = new openapisdk.models.shared.Region[]() {{
                                            add(new Region() {{
                                                regionName = "recusandae";
                                                regionType = "qui";
                                            }}),
                                            add(new Region() {{
                                                regionName = "minus";
                                                regionType = "et";
                                            }}),
                                        }};
                                        regionIncluded = new openapisdk.models.shared.Region[]() {{
                                            add(new Region() {{
                                                regionName = "ut";
                                                regionType = "rem";
                                            }}),
                                            add(new Region() {{
                                                regionName = "eos";
                                                regionType = "et";
                                            }}),
                                            add(new Region() {{
                                                regionName = "reiciendis";
                                                regionType = "aspernatur";
                                            }}),
                                        }};
                                    }};
                                    shippingCarrierCode = "praesentium";
                                    shippingCost = new Amount() {{
                                        currency = "porro";
                                        value = "nihil";
                                    }};
                                    shippingServiceCode = "adipisci";
                                    sortOrder = 3753392688546409181;
                                    surcharge = new Amount() {{
                                        currency = "illum";
                                        value = "accusantium";
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