package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FulfillmentPolicy
 * This root response container defines a seller's fulfillment policy for a specific marketplace and category type. fulfillmentPolicy encapsulates a seller's terms for fulfilling an order and includes the shipping carriers and services used for shipment and time the seller takes to ship an order. While each seller must define at least one fulfillment policy for every marketplace into which they sell, sellers can define multiple fulfillment policies for a single marketplace by specifying different configurations for the unique policies.
**/
public class FulfillmentPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryTypes")
    public CategoryType[] categoryTypes;
    public FulfillmentPolicy withCategoryTypes(CategoryType[] categoryTypes) {
        this.categoryTypes = categoryTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public FulfillmentPolicy withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freightShipping")
    public Boolean freightShipping;
    public FulfillmentPolicy withFreightShipping(Boolean freightShipping) {
        this.freightShipping = freightShipping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fulfillmentPolicyId")
    public String fulfillmentPolicyId;
    public FulfillmentPolicy withFulfillmentPolicyId(String fulfillmentPolicyId) {
        this.fulfillmentPolicyId = fulfillmentPolicyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("globalShipping")
    public Boolean globalShipping;
    public FulfillmentPolicy withGlobalShipping(Boolean globalShipping) {
        this.globalShipping = globalShipping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("handlingTime")
    public TimeDuration handlingTime;
    public FulfillmentPolicy withHandlingTime(TimeDuration handlingTime) {
        this.handlingTime = handlingTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localPickup")
    public Boolean localPickup;
    public FulfillmentPolicy withLocalPickup(Boolean localPickup) {
        this.localPickup = localPickup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplaceId")
    public String marketplaceId;
    public FulfillmentPolicy withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public FulfillmentPolicy withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickupDropOff")
    public Boolean pickupDropOff;
    public FulfillmentPolicy withPickupDropOff(Boolean pickupDropOff) {
        this.pickupDropOff = pickupDropOff;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipToLocations")
    public RegionSet shipToLocations;
    public FulfillmentPolicy withShipToLocations(RegionSet shipToLocations) {
        this.shipToLocations = shipToLocations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingOptions")
    public ShippingOption[] shippingOptions;
    public FulfillmentPolicy withShippingOptions(ShippingOption[] shippingOptions) {
        this.shippingOptions = shippingOptions;
        return this;
    }
}