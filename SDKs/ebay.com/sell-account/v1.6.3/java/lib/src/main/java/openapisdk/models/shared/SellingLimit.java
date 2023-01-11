package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SellingLimit
 * Defines the selling limit applied to an eBay seller's account.
**/
public class SellingLimit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Amount amount;
    public SellingLimit withAmount(Amount amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Integer quantity;
    public SellingLimit withQuantity(Integer quantity) {
        this.quantity = quantity;
        return this;
    }
}