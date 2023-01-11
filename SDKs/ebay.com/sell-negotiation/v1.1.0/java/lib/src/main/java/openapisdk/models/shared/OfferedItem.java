package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OfferedItem
 * A complex type that defines the offer being made to an &quot;interested&quot; buyer.
**/
public class OfferedItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountPercentage")
    public String discountPercentage;
    public OfferedItem withDiscountPercentage(String discountPercentage) {
        this.discountPercentage = discountPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listingId")
    public String listingId;
    public OfferedItem withListingId(String listingId) {
        this.listingId = listingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Amount price;
    public OfferedItem withPrice(Amount price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Integer quantity;
    public OfferedItem withQuantity(Integer quantity) {
        this.quantity = quantity;
        return this;
    }
}