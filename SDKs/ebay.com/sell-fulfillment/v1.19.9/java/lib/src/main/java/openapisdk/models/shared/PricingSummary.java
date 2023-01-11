package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PricingSummary
 * This type contains a summary of cumulative costs and charges for all line items of an order, including item price, price adjustments, sales taxes, delivery costs, and order discounts.
**/
public class PricingSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adjustment")
    public Amount adjustment;
    public PricingSummary withAdjustment(Amount adjustment) {
        this.adjustment = adjustment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryCost")
    public Amount deliveryCost;
    public PricingSummary withDeliveryCost(Amount deliveryCost) {
        this.deliveryCost = deliveryCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryDiscount")
    public Amount deliveryDiscount;
    public PricingSummary withDeliveryDiscount(Amount deliveryDiscount) {
        this.deliveryDiscount = deliveryDiscount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fee")
    public Amount fee;
    public PricingSummary withFee(Amount fee) {
        this.fee = fee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceDiscountSubtotal")
    public Amount priceDiscountSubtotal;
    public PricingSummary withPriceDiscountSubtotal(Amount priceDiscountSubtotal) {
        this.priceDiscountSubtotal = priceDiscountSubtotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceSubtotal")
    public Amount priceSubtotal;
    public PricingSummary withPriceSubtotal(Amount priceSubtotal) {
        this.priceSubtotal = priceSubtotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax")
    public Amount tax;
    public PricingSummary withTax(Amount tax) {
        this.tax = tax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Amount total;
    public PricingSummary withTotal(Amount total) {
        this.total = total;
        return this;
    }
}