package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FulfillmentStartInstruction
 * This type contains a set of specifications for processing a fulfillment of an order, including the type of fulfillment, shipping carrier and service, addressing details, and estimated delivery window. These instructions are derived from the buyer's and seller's eBay account preferences, the listing parameters, and the buyer's checkout selections. The seller can use them as a starting point for packaging, addressing, and shipping the order.
**/
public class FulfillmentStartInstruction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ebaySupportedFulfillment")
    public Boolean ebaySupportedFulfillment;
    public FulfillmentStartInstruction withEbaySupportedFulfillment(Boolean ebaySupportedFulfillment) {
        this.ebaySupportedFulfillment = ebaySupportedFulfillment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("finalDestinationAddress")
    public Address finalDestinationAddress;
    public FulfillmentStartInstruction withFinalDestinationAddress(Address finalDestinationAddress) {
        this.finalDestinationAddress = finalDestinationAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fulfillmentInstructionsType")
    public String fulfillmentInstructionsType;
    public FulfillmentStartInstruction withFulfillmentInstructionsType(String fulfillmentInstructionsType) {
        this.fulfillmentInstructionsType = fulfillmentInstructionsType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxEstimatedDeliveryDate")
    public String maxEstimatedDeliveryDate;
    public FulfillmentStartInstruction withMaxEstimatedDeliveryDate(String maxEstimatedDeliveryDate) {
        this.maxEstimatedDeliveryDate = maxEstimatedDeliveryDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minEstimatedDeliveryDate")
    public String minEstimatedDeliveryDate;
    public FulfillmentStartInstruction withMinEstimatedDeliveryDate(String minEstimatedDeliveryDate) {
        this.minEstimatedDeliveryDate = minEstimatedDeliveryDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickupStep")
    public PickupStep pickupStep;
    public FulfillmentStartInstruction withPickupStep(PickupStep pickupStep) {
        this.pickupStep = pickupStep;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingStep")
    public ShippingStep shippingStep;
    public FulfillmentStartInstruction withShippingStep(ShippingStep shippingStep) {
        this.shippingStep = shippingStep;
        return this;
    }
}