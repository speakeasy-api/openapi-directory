package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PurchasedRate
 * The &quot;rate&quot; that has been selected and purchased for the shipment, as referenced by the rateId value.
**/
public class PurchasedRate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalOptions")
    public AdditionalOption[] additionalOptions;
    public PurchasedRate withAdditionalOptions(AdditionalOption[] additionalOptions) {
        this.additionalOptions = additionalOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseShippingCost")
    public Amount baseShippingCost;
    public PurchasedRate withBaseShippingCost(Amount baseShippingCost) {
        this.baseShippingCost = baseShippingCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationTimeZone")
    public String destinationTimeZone;
    public PurchasedRate withDestinationTimeZone(String destinationTimeZone) {
        this.destinationTimeZone = destinationTimeZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxEstimatedDeliveryDate")
    public String maxEstimatedDeliveryDate;
    public PurchasedRate withMaxEstimatedDeliveryDate(String maxEstimatedDeliveryDate) {
        this.maxEstimatedDeliveryDate = maxEstimatedDeliveryDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minEstimatedDeliveryDate")
    public String minEstimatedDeliveryDate;
    public PurchasedRate withMinEstimatedDeliveryDate(String minEstimatedDeliveryDate) {
        this.minEstimatedDeliveryDate = minEstimatedDeliveryDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickupNetworks")
    public String[] pickupNetworks;
    public PurchasedRate withPickupNetworks(String[] pickupNetworks) {
        this.pickupNetworks = pickupNetworks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickupSlotId")
    public String pickupSlotId;
    public PurchasedRate withPickupSlotId(String pickupSlotId) {
        this.pickupSlotId = pickupSlotId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickupType")
    public String pickupType;
    public PurchasedRate withPickupType(String pickupType) {
        this.pickupType = pickupType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rateId")
    public String rateId;
    public PurchasedRate withRateId(String rateId) {
        this.rateId = rateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingCarrierCode")
    public String shippingCarrierCode;
    public PurchasedRate withShippingCarrierCode(String shippingCarrierCode) {
        this.shippingCarrierCode = shippingCarrierCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingCarrierName")
    public String shippingCarrierName;
    public PurchasedRate withShippingCarrierName(String shippingCarrierName) {
        this.shippingCarrierName = shippingCarrierName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingQuoteId")
    public String shippingQuoteId;
    public PurchasedRate withShippingQuoteId(String shippingQuoteId) {
        this.shippingQuoteId = shippingQuoteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingServiceCode")
    public String shippingServiceCode;
    public PurchasedRate withShippingServiceCode(String shippingServiceCode) {
        this.shippingServiceCode = shippingServiceCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingServiceName")
    public String shippingServiceName;
    public PurchasedRate withShippingServiceName(String shippingServiceName) {
        this.shippingServiceName = shippingServiceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalShippingCost")
    public Amount totalShippingCost;
    public PurchasedRate withTotalShippingCost(Amount totalShippingCost) {
        this.totalShippingCost = totalShippingCost;
        return this;
    }
}