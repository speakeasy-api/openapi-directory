package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeliveryCost
 * This type contains a breakdown of all costs associated with the fulfillment of a line item.
**/
public class DeliveryCost {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("importCharges")
    public Amount importCharges;
    public DeliveryCost withImportCharges(Amount importCharges) {
        this.importCharges = importCharges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingCost")
    public Amount shippingCost;
    public DeliveryCost withShippingCost(Amount shippingCost) {
        this.shippingCost = shippingCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingIntermediationFee")
    public Amount shippingIntermediationFee;
    public DeliveryCost withShippingIntermediationFee(Amount shippingIntermediationFee) {
        this.shippingIntermediationFee = shippingIntermediationFee;
        return this;
    }
}