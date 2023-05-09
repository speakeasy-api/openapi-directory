# fulfillmentPolicy

### Available Operations

* [createFulfillmentPolicy](#createfulfillmentpolicy) - This method creates a new fulfillment policy where the policy encapsulates seller's terms for fulfilling item purchases. Fulfillment policies include the shipment options that the seller offers to buyers.  <br/><br/>Each policy targets a specific eBay marketplace and a category group type, and you can create multiple policies for each combination. <br/><br/>A successful request returns the <b>getFulfillmentPolicy</b> URI to the new policy in the <b>Location</b> response header and the ID for the new policy is returned in the response payload.  <p class="tablenote"><b>Tip:</b> For details on creating and using the business policies supported by the Account API, see <a href="/api-docs/sell/static/seller-accounts/business-policies.html">eBay business policies</a>.</p>  <p><b>Using the eBay standard envelope service (eSE)</b></p>  <p>The eBay standard envelope service (eSE) is a domestic envelope service with tracking through eBay. This service applies to specific Trading Cards categories (not all categories are supported), and to Coins & Paper Money, Postcards, and Stamps. See <a href="/api-docs/sell/static/seller-accounts/using-the-ebay-standard-envelope-service.html" target="_blank">Using the eBay standard envelope (eSE) service</a>.</p>
* [deleteFulfillmentPolicy](#deletefulfillmentpolicy) - This method deletes a fulfillment policy. Supply the ID of the policy you want to delete in the <b>fulfillmentPolicyId</b> path parameter.
* [getFulfillmentPolicies](#getfulfillmentpolicies) - This method retrieves all the fulfillment policies configured for the marketplace you specify using the <code>marketplace_id</code> query parameter.  <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policies for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get the policies for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.
* [getFulfillmentPolicy](#getfulfillmentpolicy) - This method retrieves the complete details of a fulfillment policy. Supply the ID of the policy you want to retrieve using the <b>fulfillmentPolicyId</b> path parameter.
* [getFulfillmentPolicyByName](#getfulfillmentpolicybyname) - This method retrieves the details for a specific fulfillment policy. In the request, supply both the policy <code>name</code> and its associated <code>marketplace_id</code> as query parameters.   <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policy for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get a policy for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP">HTTP request headers</a>.
* [updateFulfillmentPolicy](#updatefulfillmentpolicy) - This method updates an existing fulfillment policy. Specify the policy you want to update using the <b>fulfillment_policy_id</b> path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.

## createFulfillmentPolicy

This method creates a new fulfillment policy where the policy encapsulates seller's terms for fulfilling item purchases. Fulfillment policies include the shipment options that the seller offers to buyers.  <br/><br/>Each policy targets a specific eBay marketplace and a category group type, and you can create multiple policies for each combination. <br/><br/>A successful request returns the <b>getFulfillmentPolicy</b> URI to the new policy in the <b>Location</b> response header and the ID for the new policy is returned in the response payload.  <p class="tablenote"><b>Tip:</b> For details on creating and using the business policies supported by the Account API, see <a href="/api-docs/sell/static/seller-accounts/business-policies.html">eBay business policies</a>.</p>  <p><b>Using the eBay standard envelope service (eSE)</b></p>  <p>The eBay standard envelope service (eSE) is a domestic envelope service with tracking through eBay. This service applies to specific Trading Cards categories (not all categories are supported), and to Coins & Paper Money, Postcards, and Stamps. See <a href="/api-docs/sell/static/seller-accounts/using-the-ebay-standard-envelope-service.html" target="_blank">Using the eBay standard envelope (eSE) service</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFulfillmentPolicyResponse;
import org.openapis.openapi.models.operations.CreateFulfillmentPolicySecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.CategoryType;
import org.openapis.openapi.models.shared.FulfillmentPolicyRequest;
import org.openapis.openapi.models.shared.Region;
import org.openapis.openapi.models.shared.RegionSet;
import org.openapis.openapi.models.shared.ShippingOption;
import org.openapis.openapi.models.shared.ShippingService;
import org.openapis.openapi.models.shared.TimeDuration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.FulfillmentPolicyRequest req = new FulfillmentPolicyRequest() {{
                categoryTypes = new org.openapis.openapi.models.shared.CategoryType[]{{
                    add(new CategoryType() {{
                        default_ = false;
                        name = "Timmy Satterfield";
                    }}),
                    add(new CategoryType() {{
                        default_ = false;
                        name = "Emilio Krajcik";
                    }}),
                }};
                description = "esse";
                freightShipping = false;
                globalShipping = false;
                handlingTime = new TimeDuration() {{
                    unit = "totam";
                    value = 780529;
                }};;
                localPickup = false;
                marketplaceId = "dolorum";
                name = "Antoinette Nikolaus";
                pickupDropOff = false;
                shipToLocations = new RegionSet() {{
                    regionExcluded = new org.openapis.openapi.models.shared.Region[]{{
                        add(new Region() {{
                            regionName = "hic";
                            regionType = "optio";
                        }}),
                        add(new Region() {{
                            regionName = "totam";
                            regionType = "beatae";
                        }}),
                        add(new Region() {{
                            regionName = "commodi";
                            regionType = "molestiae";
                        }}),
                    }};
                    regionIncluded = new org.openapis.openapi.models.shared.Region[]{{
                        add(new Region() {{
                            regionName = "qui";
                            regionType = "impedit";
                        }}),
                        add(new Region() {{
                            regionName = "cum";
                            regionType = "esse";
                        }}),
                    }};
                }};;
                shippingOptions = new org.openapis.openapi.models.shared.ShippingOption[]{{
                    add(new ShippingOption() {{
                        costType = "excepturi";
                        insuranceFee = new Amount() {{
                            currency = "aspernatur";
                            value = "perferendis";
                        }};
                        insuranceOffered = false;
                        optionType = "ad";
                        packageHandlingCost = new Amount() {{
                            currency = "natus";
                            value = "sed";
                        }};
                        rateTableId = "iste";
                        shippingDiscountProfileId = "dolor";
                        shippingPromotionOffered = false;
                        shippingServices = new org.openapis.openapi.models.shared.ShippingService[]{{
                            add(new ShippingService() {{
                                additionalShippingCost = new Amount() {{
                                    currency = "laboriosam";
                                    value = "hic";
                                }};
                                buyerResponsibleForPickup = false;
                                buyerResponsibleForShipping = false;
                                cashOnDeliveryFee = new Amount() {{
                                    currency = "saepe";
                                    value = "fuga";
                                }};
                                freeShipping = false;
                                shipToLocations = new RegionSet() {{
                                    regionExcluded = new org.openapis.openapi.models.shared.Region[]{{
                                        add(new Region() {{
                                            regionName = "corporis";
                                            regionType = "iste";
                                        }}),
                                        add(new Region() {{
                                            regionName = "iure";
                                            regionType = "saepe";
                                        }}),
                                    }};
                                    regionIncluded = new org.openapis.openapi.models.shared.Region[]{{
                                        add(new Region() {{
                                            regionName = "architecto";
                                            regionType = "ipsa";
                                        }}),
                                        add(new Region() {{
                                            regionName = "reiciendis";
                                            regionType = "est";
                                        }}),
                                        add(new Region() {{
                                            regionName = "mollitia";
                                            regionType = "laborum";
                                        }}),
                                    }};
                                }};
                                shippingCarrierCode = "dolores";
                                shippingCost = new Amount() {{
                                    currency = "dolorem";
                                    value = "corporis";
                                }};
                                shippingServiceCode = "explicabo";
                                sortOrder = 750686;
                                surcharge = new Amount() {{
                                    currency = "enim";
                                    value = "omnis";
                                }};
                            }}),
                            add(new ShippingService() {{
                                additionalShippingCost = new Amount() {{
                                    currency = "nemo";
                                    value = "minima";
                                }};
                                buyerResponsibleForPickup = false;
                                buyerResponsibleForShipping = false;
                                cashOnDeliveryFee = new Amount() {{
                                    currency = "excepturi";
                                    value = "accusantium";
                                }};
                                freeShipping = false;
                                shipToLocations = new RegionSet() {{
                                    regionExcluded = new org.openapis.openapi.models.shared.Region[]{{
                                        add(new Region() {{
                                            regionName = "culpa";
                                            regionType = "doloribus";
                                        }}),
                                        add(new Region() {{
                                            regionName = "sapiente";
                                            regionType = "architecto";
                                        }}),
                                    }};
                                    regionIncluded = new org.openapis.openapi.models.shared.Region[]{{
                                        add(new Region() {{
                                            regionName = "dolorem";
                                            regionType = "culpa";
                                        }}),
                                        add(new Region() {{
                                            regionName = "consequuntur";
                                            regionType = "repellat";
                                        }}),
                                        add(new Region() {{
                                            regionName = "mollitia";
                                            regionType = "occaecati";
                                        }}),
                                    }};
                                }};
                                shippingCarrierCode = "numquam";
                                shippingCost = new Amount() {{
                                    currency = "commodi";
                                    value = "quam";
                                }};
                                shippingServiceCode = "molestiae";
                                sortOrder = 244425;
                                surcharge = new Amount() {{
                                    currency = "error";
                                    value = "quia";
                                }};
                            }}),
                            add(new ShippingService() {{
                                additionalShippingCost = new Amount() {{
                                    currency = "quis";
                                    value = "vitae";
                                }};
                                buyerResponsibleForPickup = false;
                                buyerResponsibleForShipping = false;
                                cashOnDeliveryFee = new Amount() {{
                                    currency = "laborum";
                                    value = "animi";
                                }};
                                freeShipping = false;
                                shipToLocations = new RegionSet() {{
                                    regionExcluded = new org.openapis.openapi.models.shared.Region[]{{
                                        add(new Region() {{
                                            regionName = "odit";
                                            regionType = "quo";
                                        }}),
                                        add(new Region() {{
                                            regionName = "sequi";
                                            regionType = "tenetur";
                                        }}),
                                    }};
                                    regionIncluded = new org.openapis.openapi.models.shared.Region[]{{
                                        add(new Region() {{
                                            regionName = "id";
                                            regionType = "possimus";
                                        }}),
                                        add(new Region() {{
                                            regionName = "aut";
                                            regionType = "quasi";
                                        }}),
                                    }};
                                }};
                                shippingCarrierCode = "error";
                                shippingCost = new Amount() {{
                                    currency = "temporibus";
                                    value = "laborum";
                                }};
                                shippingServiceCode = "quasi";
                                sortOrder = 971945;
                                surcharge = new Amount() {{
                                    currency = "voluptatibus";
                                    value = "vero";
                                }};
                            }}),
                        }};
                    }}),
                }};
            }};            

            CreateFulfillmentPolicyResponse res = sdk.fulfillmentPolicy.createFulfillmentPolicy(req, new CreateFulfillmentPolicySecurity("nihil") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.setFulfillmentPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFulfillmentPolicy

This method deletes a fulfillment policy. Supply the ID of the policy you want to delete in the <b>fulfillmentPolicyId</b> path parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFulfillmentPolicyRequest;
import org.openapis.openapi.models.operations.DeleteFulfillmentPolicyResponse;
import org.openapis.openapi.models.operations.DeleteFulfillmentPolicySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteFulfillmentPolicyRequest req = new DeleteFulfillmentPolicyRequest("praesentium");            

            DeleteFulfillmentPolicyResponse res = sdk.fulfillmentPolicy.deleteFulfillmentPolicy(req, new DeleteFulfillmentPolicySecurity("voluptatibus") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFulfillmentPolicies

This method retrieves all the fulfillment policies configured for the marketplace you specify using the <code>marketplace_id</code> query parameter.  <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policies for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get the policies for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFulfillmentPoliciesRequest;
import org.openapis.openapi.models.operations.GetFulfillmentPoliciesResponse;
import org.openapis.openapi.models.operations.GetFulfillmentPoliciesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFulfillmentPoliciesRequest req = new GetFulfillmentPoliciesRequest("ipsa");            

            GetFulfillmentPoliciesResponse res = sdk.fulfillmentPolicy.getFulfillmentPolicies(req, new GetFulfillmentPoliciesSecurity("omnis") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.fulfillmentPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFulfillmentPolicy

This method retrieves the complete details of a fulfillment policy. Supply the ID of the policy you want to retrieve using the <b>fulfillmentPolicyId</b> path parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFulfillmentPolicyRequest;
import org.openapis.openapi.models.operations.GetFulfillmentPolicyResponse;
import org.openapis.openapi.models.operations.GetFulfillmentPolicySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFulfillmentPolicyRequest req = new GetFulfillmentPolicyRequest("voluptate");            

            GetFulfillmentPolicyResponse res = sdk.fulfillmentPolicy.getFulfillmentPolicy(req, new GetFulfillmentPolicySecurity("cum") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.fulfillmentPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFulfillmentPolicyByName

This method retrieves the details for a specific fulfillment policy. In the request, supply both the policy <code>name</code> and its associated <code>marketplace_id</code> as query parameters.   <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policy for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get a policy for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP">HTTP request headers</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFulfillmentPolicyByNameRequest;
import org.openapis.openapi.models.operations.GetFulfillmentPolicyByNameResponse;
import org.openapis.openapi.models.operations.GetFulfillmentPolicyByNameSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFulfillmentPolicyByNameRequest req = new GetFulfillmentPolicyByNameRequest("perferendis", "doloremque");            

            GetFulfillmentPolicyByNameResponse res = sdk.fulfillmentPolicy.getFulfillmentPolicyByName(req, new GetFulfillmentPolicyByNameSecurity("reprehenderit") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.fulfillmentPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFulfillmentPolicy

This method updates an existing fulfillment policy. Specify the policy you want to update using the <b>fulfillment_policy_id</b> path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFulfillmentPolicyRequest;
import org.openapis.openapi.models.operations.UpdateFulfillmentPolicyResponse;
import org.openapis.openapi.models.operations.UpdateFulfillmentPolicySecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.CategoryType;
import org.openapis.openapi.models.shared.FulfillmentPolicyRequest;
import org.openapis.openapi.models.shared.Region;
import org.openapis.openapi.models.shared.RegionSet;
import org.openapis.openapi.models.shared.ShippingOption;
import org.openapis.openapi.models.shared.ShippingService;
import org.openapis.openapi.models.shared.TimeDuration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateFulfillmentPolicyRequest req = new UpdateFulfillmentPolicyRequest(                new FulfillmentPolicyRequest() {{
                                categoryTypes = new org.openapis.openapi.models.shared.CategoryType[]{{
                                    add(new CategoryType() {{
                                        default_ = false;
                                        name = "Willie Hessel";
                                    }}),
                                    add(new CategoryType() {{
                                        default_ = false;
                                        name = "Maryann Hamill";
                                    }}),
                                }};
                                description = "repudiandae";
                                freightShipping = false;
                                globalShipping = false;
                                handlingTime = new TimeDuration() {{
                                    unit = "quae";
                                    value = 216822;
                                }};;
                                localPickup = false;
                                marketplaceId = "quidem";
                                name = "Andy Streich";
                                pickupDropOff = false;
                                shipToLocations = new RegionSet() {{
                                    regionExcluded = new org.openapis.openapi.models.shared.Region[]{{
                                        add(new Region() {{
                                            regionName = "voluptates";
                                            regionType = "quasi";
                                        }}),
                                        add(new Region() {{
                                            regionName = "repudiandae";
                                            regionType = "sint";
                                        }}),
                                        add(new Region() {{
                                            regionName = "veritatis";
                                            regionType = "itaque";
                                        }}),
                                    }};
                                    regionIncluded = new org.openapis.openapi.models.shared.Region[]{{
                                        add(new Region() {{
                                            regionName = "enim";
                                            regionType = "consequatur";
                                        }}),
                                        add(new Region() {{
                                            regionName = "est";
                                            regionType = "quibusdam";
                                        }}),
                                    }};
                                }};;
                                shippingOptions = new org.openapis.openapi.models.shared.ShippingOption[]{{
                                    add(new ShippingOption() {{
                                        costType = "deserunt";
                                        insuranceFee = new Amount() {{
                                            currency = "distinctio";
                                            value = "quibusdam";
                                        }};
                                        insuranceOffered = false;
                                        optionType = "labore";
                                        packageHandlingCost = new Amount() {{
                                            currency = "modi";
                                            value = "qui";
                                        }};
                                        rateTableId = "aliquid";
                                        shippingDiscountProfileId = "cupiditate";
                                        shippingPromotionOffered = false;
                                        shippingServices = new org.openapis.openapi.models.shared.ShippingService[]{{
                                            add(new ShippingService() {{
                                                additionalShippingCost = new Amount() {{
                                                    currency = "perferendis";
                                                    value = "magni";
                                                }};
                                                buyerResponsibleForPickup = false;
                                                buyerResponsibleForShipping = false;
                                                cashOnDeliveryFee = new Amount() {{
                                                    currency = "assumenda";
                                                    value = "ipsam";
                                                }};
                                                freeShipping = false;
                                                shipToLocations = new RegionSet() {{
                                                    regionExcluded = new org.openapis.openapi.models.shared.Region[]{{
                                                        add(new Region() {{
                                                            regionName = "fugit";
                                                            regionType = "dolorum";
                                                        }}),
                                                    }};
                                                    regionIncluded = new org.openapis.openapi.models.shared.Region[]{{
                                                        add(new Region() {{
                                                            regionName = "tempora";
                                                            regionType = "facilis";
                                                        }}),
                                                        add(new Region() {{
                                                            regionName = "tempore";
                                                            regionType = "labore";
                                                        }}),
                                                        add(new Region() {{
                                                            regionName = "delectus";
                                                            regionType = "eum";
                                                        }}),
                                                    }};
                                                }};
                                                shippingCarrierCode = "non";
                                                shippingCost = new Amount() {{
                                                    currency = "eligendi";
                                                    value = "sint";
                                                }};
                                                shippingServiceCode = "aliquid";
                                                sortOrder = 592042;
                                                surcharge = new Amount() {{
                                                    currency = "necessitatibus";
                                                    value = "sint";
                                                }};
                                            }}),
                                            add(new ShippingService() {{
                                                additionalShippingCost = new Amount() {{
                                                    currency = "officia";
                                                    value = "dolor";
                                                }};
                                                buyerResponsibleForPickup = false;
                                                buyerResponsibleForShipping = false;
                                                cashOnDeliveryFee = new Amount() {{
                                                    currency = "debitis";
                                                    value = "a";
                                                }};
                                                freeShipping = false;
                                                shipToLocations = new RegionSet() {{
                                                    regionExcluded = new org.openapis.openapi.models.shared.Region[]{{
                                                        add(new Region() {{
                                                            regionName = "in";
                                                            regionType = "in";
                                                        }}),
                                                        add(new Region() {{
                                                            regionName = "illum";
                                                            regionType = "maiores";
                                                        }}),
                                                        add(new Region() {{
                                                            regionName = "rerum";
                                                            regionType = "dicta";
                                                        }}),
                                                    }};
                                                    regionIncluded = new org.openapis.openapi.models.shared.Region[]{{
                                                        add(new Region() {{
                                                            regionName = "cumque";
                                                            regionType = "facere";
                                                        }}),
                                                        add(new Region() {{
                                                            regionName = "ea";
                                                            regionType = "aliquid";
                                                        }}),
                                                    }};
                                                }};
                                                shippingCarrierCode = "laborum";
                                                shippingCost = new Amount() {{
                                                    currency = "accusamus";
                                                    value = "non";
                                                }};
                                                shippingServiceCode = "occaecati";
                                                sortOrder = 313218;
                                                surcharge = new Amount() {{
                                                    currency = "accusamus";
                                                    value = "delectus";
                                                }};
                                            }}),
                                            add(new ShippingService() {{
                                                additionalShippingCost = new Amount() {{
                                                    currency = "quidem";
                                                    value = "provident";
                                                }};
                                                buyerResponsibleForPickup = false;
                                                buyerResponsibleForShipping = false;
                                                cashOnDeliveryFee = new Amount() {{
                                                    currency = "nam";
                                                    value = "id";
                                                }};
                                                freeShipping = false;
                                                shipToLocations = new RegionSet() {{
                                                    regionExcluded = new org.openapis.openapi.models.shared.Region[]{{
                                                        add(new Region() {{
                                                            regionName = "deleniti";
                                                            regionType = "sapiente";
                                                        }}),
                                                        add(new Region() {{
                                                            regionName = "amet";
                                                            regionType = "deserunt";
                                                        }}),
                                                        add(new Region() {{
                                                            regionName = "nisi";
                                                            regionType = "vel";
                                                        }}),
                                                    }};
                                                    regionIncluded = new org.openapis.openapi.models.shared.Region[]{{
                                                        add(new Region() {{
                                                            regionName = "omnis";
                                                            regionType = "molestiae";
                                                        }}),
                                                        add(new Region() {{
                                                            regionName = "perferendis";
                                                            regionType = "nihil";
                                                        }}),
                                                        add(new Region() {{
                                                            regionName = "magnam";
                                                            regionType = "distinctio";
                                                        }}),
                                                    }};
                                                }};
                                                shippingCarrierCode = "id";
                                                shippingCost = new Amount() {{
                                                    currency = "labore";
                                                    value = "labore";
                                                }};
                                                shippingServiceCode = "suscipit";
                                                sortOrder = 618016;
                                                surcharge = new Amount() {{
                                                    currency = "nobis";
                                                    value = "eum";
                                                }};
                                            }}),
                                        }};
                                    }}),
                                }};
                            }};, "vero");            

            UpdateFulfillmentPolicyResponse res = sdk.fulfillmentPolicy.updateFulfillmentPolicy(req, new UpdateFulfillmentPolicySecurity("aspernatur") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.setFulfillmentPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
