package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ShippingOption
 * The details provided for the shipping provider, such as shipping cost and type.
**/
public class ShippingOption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingCost")
    public Amount shippingCost;
    public ShippingOption withShippingCost(Amount shippingCost) {
        this.shippingCost = shippingCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingCostType")
    public String shippingCostType;
    public ShippingOption withShippingCostType(String shippingCostType) {
        this.shippingCostType = shippingCostType;
        return this;
    }
}