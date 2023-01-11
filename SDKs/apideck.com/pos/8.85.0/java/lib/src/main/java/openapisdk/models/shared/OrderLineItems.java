package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderLineItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applied_discounts")
    public Object[] appliedDiscounts;
    public OrderLineItems withAppliedDiscounts(Object[] appliedDiscounts) {
        this.appliedDiscounts = appliedDiscounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applied_taxes")
    public Object[] appliedTaxes;
    public OrderLineItems withAppliedTaxes(Object[] appliedTaxes) {
        this.appliedTaxes = appliedTaxes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public OrderLineItems withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("item")
    public Object item;
    public OrderLineItems withItem(Object item) {
        this.item = item;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modifiers")
    public Object[] modifiers;
    public OrderLineItems withModifiers(Object[] modifiers) {
        this.modifiers = modifiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public OrderLineItems withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Double quantity;
    public OrderLineItems withQuantity(Double quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_amount")
    public Long totalAmount;
    public OrderLineItems withTotalAmount(Long totalAmount) {
        this.totalAmount = totalAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_discount")
    public Long totalDiscount;
    public OrderLineItems withTotalDiscount(Long totalDiscount) {
        this.totalDiscount = totalDiscount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_tax")
    public Long totalTax;
    public OrderLineItems withTotalTax(Long totalTax) {
        this.totalTax = totalTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit_price")
    public Double unitPrice;
    public OrderLineItems withUnitPrice(Double unitPrice) {
        this.unitPrice = unitPrice;
        return this;
    }
}