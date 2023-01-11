package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FulfillmentPolicyRequest
 * This root container defines a seller's fulfillment policy for a specific marketplace and category type. Used when creating or updating a fulfillment policy, fulfillmentPolicyRequest encapsulates a seller's terms for fulfilling an order and includes the shipping carriers and services used for shipment and time the seller takes to ship an order. While each seller must define at least one fulfillment policy for every marketplace into which they sell, sellers can define multiple fulfillment policies for a single marketplace by specifying different configurations for the unique policies. A successful call returns a fulfillmentPolicyId, plus the Location response header contains the URI to the resource. Policy instructions can be localized by providing a locale in the Content-Language HTTP request header. For example: Content-Language: de-DE. Tip: For more on using business policies, see eBay business policies.
**/
public class FulfillmentPolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryTypes")
    public CategoryType[] categoryTypes;
    public FulfillmentPolicyRequest withCategoryTypes(CategoryType[] categoryTypes) {
        this.categoryTypes = categoryTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public FulfillmentPolicyRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freightShipping")
    public Boolean freightShipping;
    public FulfillmentPolicyRequest withFreightShipping(Boolean freightShipping) {
        this.freightShipping = freightShipping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("globalShipping")
    public Boolean globalShipping;
    public FulfillmentPolicyRequest withGlobalShipping(Boolean globalShipping) {
        this.globalShipping = globalShipping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("handlingTime")
    public TimeDuration handlingTime;
    public FulfillmentPolicyRequest withHandlingTime(TimeDuration handlingTime) {
        this.handlingTime = handlingTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localPickup")
    public Boolean localPickup;
    public FulfillmentPolicyRequest withLocalPickup(Boolean localPickup) {
        this.localPickup = localPickup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplaceId")
    public String marketplaceId;
    public FulfillmentPolicyRequest withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public FulfillmentPolicyRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickupDropOff")
    public Boolean pickupDropOff;
    public FulfillmentPolicyRequest withPickupDropOff(Boolean pickupDropOff) {
        this.pickupDropOff = pickupDropOff;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipToLocations")
    public RegionSet shipToLocations;
    public FulfillmentPolicyRequest withShipToLocations(RegionSet shipToLocations) {
        this.shipToLocations = shipToLocations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingOptions")
    public ShippingOption[] shippingOptions;
    public FulfillmentPolicyRequest withShippingOptions(ShippingOption[] shippingOptions) {
        this.shippingOptions = shippingOptions;
        return this;
    }
}