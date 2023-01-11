package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SetFulfillmentPolicyResponse
 * Complex type that that gets populated with a response containing a fulfillment policy.
**/
public class SetFulfillmentPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryTypes")
    public CategoryType[] categoryTypes;
    public SetFulfillmentPolicyResponse withCategoryTypes(CategoryType[] categoryTypes) {
        this.categoryTypes = categoryTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SetFulfillmentPolicyResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freightShipping")
    public Boolean freightShipping;
    public SetFulfillmentPolicyResponse withFreightShipping(Boolean freightShipping) {
        this.freightShipping = freightShipping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fulfillmentPolicyId")
    public String fulfillmentPolicyId;
    public SetFulfillmentPolicyResponse withFulfillmentPolicyId(String fulfillmentPolicyId) {
        this.fulfillmentPolicyId = fulfillmentPolicyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("globalShipping")
    public Boolean globalShipping;
    public SetFulfillmentPolicyResponse withGlobalShipping(Boolean globalShipping) {
        this.globalShipping = globalShipping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("handlingTime")
    public TimeDuration handlingTime;
    public SetFulfillmentPolicyResponse withHandlingTime(TimeDuration handlingTime) {
        this.handlingTime = handlingTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localPickup")
    public Boolean localPickup;
    public SetFulfillmentPolicyResponse withLocalPickup(Boolean localPickup) {
        this.localPickup = localPickup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplaceId")
    public String marketplaceId;
    public SetFulfillmentPolicyResponse withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SetFulfillmentPolicyResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickupDropOff")
    public Boolean pickupDropOff;
    public SetFulfillmentPolicyResponse withPickupDropOff(Boolean pickupDropOff) {
        this.pickupDropOff = pickupDropOff;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipToLocations")
    public RegionSet shipToLocations;
    public SetFulfillmentPolicyResponse withShipToLocations(RegionSet shipToLocations) {
        this.shipToLocations = shipToLocations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingOptions")
    public ShippingOption[] shippingOptions;
    public SetFulfillmentPolicyResponse withShippingOptions(ShippingOption[] shippingOptions) {
        this.shippingOptions = shippingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public Error[] warnings;
    public SetFulfillmentPolicyResponse withWarnings(Error[] warnings) {
        this.warnings = warnings;
        return this;
    }
}