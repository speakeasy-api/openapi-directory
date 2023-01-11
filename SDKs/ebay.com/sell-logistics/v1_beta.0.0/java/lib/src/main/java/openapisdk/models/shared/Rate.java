package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Rate
 * This complex type contains live quote information about a shipping service that's available for a given shipping quote request, including the shipping carrier and service, delivery window, shipping cost, and additional shipping options.
**/
public class Rate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalOptions")
    public AdditionalOption[] additionalOptions;
    public Rate withAdditionalOptions(AdditionalOption[] additionalOptions) {
        this.additionalOptions = additionalOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseShippingCost")
    public Amount baseShippingCost;
    public Rate withBaseShippingCost(Amount baseShippingCost) {
        this.baseShippingCost = baseShippingCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationTimeZone")
    public String destinationTimeZone;
    public Rate withDestinationTimeZone(String destinationTimeZone) {
        this.destinationTimeZone = destinationTimeZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxEstimatedDeliveryDate")
    public String maxEstimatedDeliveryDate;
    public Rate withMaxEstimatedDeliveryDate(String maxEstimatedDeliveryDate) {
        this.maxEstimatedDeliveryDate = maxEstimatedDeliveryDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minEstimatedDeliveryDate")
    public String minEstimatedDeliveryDate;
    public Rate withMinEstimatedDeliveryDate(String minEstimatedDeliveryDate) {
        this.minEstimatedDeliveryDate = minEstimatedDeliveryDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickupNetworks")
    public String[] pickupNetworks;
    public Rate withPickupNetworks(String[] pickupNetworks) {
        this.pickupNetworks = pickupNetworks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickupSlots")
    public PickupSlot[] pickupSlots;
    public Rate withPickupSlots(PickupSlot[] pickupSlots) {
        this.pickupSlots = pickupSlots;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickupType")
    public String pickupType;
    public Rate withPickupType(String pickupType) {
        this.pickupType = pickupType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rateId")
    public String rateId;
    public Rate withRateId(String rateId) {
        this.rateId = rateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rateRecommendation")
    public String[] rateRecommendation;
    public Rate withRateRecommendation(String[] rateRecommendation) {
        this.rateRecommendation = rateRecommendation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingCarrierCode")
    public String shippingCarrierCode;
    public Rate withShippingCarrierCode(String shippingCarrierCode) {
        this.shippingCarrierCode = shippingCarrierCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingCarrierName")
    public String shippingCarrierName;
    public Rate withShippingCarrierName(String shippingCarrierName) {
        this.shippingCarrierName = shippingCarrierName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingServiceCode")
    public String shippingServiceCode;
    public Rate withShippingServiceCode(String shippingServiceCode) {
        this.shippingServiceCode = shippingServiceCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingServiceName")
    public String shippingServiceName;
    public Rate withShippingServiceName(String shippingServiceName) {
        this.shippingServiceName = shippingServiceName;
        return this;
    }
}