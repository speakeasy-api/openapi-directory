package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ShippingService
 * A complex type that defines the available shipping services offered in the parent shippingOptions container. The shipping services specified here must be able to accommodate the optionType defined in the parent shippingOption container (either DOMESTIC or INTERNATIONAL). Tip: For more on setting up shipping services, see Setting the shipping carrier and shipping service values.
**/
public class ShippingService {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalShippingCost")
    public Amount additionalShippingCost;
    public ShippingService withAdditionalShippingCost(Amount additionalShippingCost) {
        this.additionalShippingCost = additionalShippingCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyerResponsibleForPickup")
    public Boolean buyerResponsibleForPickup;
    public ShippingService withBuyerResponsibleForPickup(Boolean buyerResponsibleForPickup) {
        this.buyerResponsibleForPickup = buyerResponsibleForPickup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyerResponsibleForShipping")
    public Boolean buyerResponsibleForShipping;
    public ShippingService withBuyerResponsibleForShipping(Boolean buyerResponsibleForShipping) {
        this.buyerResponsibleForShipping = buyerResponsibleForShipping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cashOnDeliveryFee")
    public Amount cashOnDeliveryFee;
    public ShippingService withCashOnDeliveryFee(Amount cashOnDeliveryFee) {
        this.cashOnDeliveryFee = cashOnDeliveryFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeShipping")
    public Boolean freeShipping;
    public ShippingService withFreeShipping(Boolean freeShipping) {
        this.freeShipping = freeShipping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipToLocations")
    public RegionSet shipToLocations;
    public ShippingService withShipToLocations(RegionSet shipToLocations) {
        this.shipToLocations = shipToLocations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingCarrierCode")
    public String shippingCarrierCode;
    public ShippingService withShippingCarrierCode(String shippingCarrierCode) {
        this.shippingCarrierCode = shippingCarrierCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingCost")
    public Amount shippingCost;
    public ShippingService withShippingCost(Amount shippingCost) {
        this.shippingCost = shippingCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingServiceCode")
    public String shippingServiceCode;
    public ShippingService withShippingServiceCode(String shippingServiceCode) {
        this.shippingServiceCode = shippingServiceCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public Integer sortOrder;
    public ShippingService withSortOrder(Integer sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("surcharge")
    public Amount surcharge;
    public ShippingService withSurcharge(Amount surcharge) {
        this.surcharge = surcharge;
        return this;
    }
}