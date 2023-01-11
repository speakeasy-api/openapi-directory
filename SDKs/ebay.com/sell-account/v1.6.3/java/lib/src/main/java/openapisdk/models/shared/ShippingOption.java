package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ShippingOption
 * This complex type defines a seller's shipping configuration for either a DOMESTIC or INTERNATIONAL shipping option. Shipping options configure the high-level settings for shipments, such as flat-rate or calculated shipping, and any rate tables the seller wants to associate with the policy. Each shippingOption element has a shippingServices container that defines the list of shipping carriers and services that are available for the parent shipping option (that is, for either DOMESTIC or INTERNATIONAL shipping). If a seller offers an international shipping option, they must also offer a domestic shipping option. Note that costType (FLAT_RATE or CALCULATED) is set in shippingOptions and that all associated shipping services must be able to support this cost type.
**/
public class ShippingOption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costType")
    public String costType;
    public ShippingOption withCostType(String costType) {
        this.costType = costType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insuranceFee")
    public Amount insuranceFee;
    public ShippingOption withInsuranceFee(Amount insuranceFee) {
        this.insuranceFee = insuranceFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insuranceOffered")
    public Boolean insuranceOffered;
    public ShippingOption withInsuranceOffered(Boolean insuranceOffered) {
        this.insuranceOffered = insuranceOffered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("optionType")
    public String optionType;
    public ShippingOption withOptionType(String optionType) {
        this.optionType = optionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageHandlingCost")
    public Amount packageHandlingCost;
    public ShippingOption withPackageHandlingCost(Amount packageHandlingCost) {
        this.packageHandlingCost = packageHandlingCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rateTableId")
    public String rateTableId;
    public ShippingOption withRateTableId(String rateTableId) {
        this.rateTableId = rateTableId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingServices")
    public ShippingService[] shippingServices;
    public ShippingOption withShippingServices(ShippingService[] shippingServices) {
        this.shippingServices = shippingServices;
        return this;
    }
}