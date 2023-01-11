package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MessagePrice
 * Price of the message.
**/
public class MessagePrice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public CurrencyEnum currency;
    public MessagePrice withCurrency(CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("per_unit")
    public String perUnit;
    public MessagePrice withPerUnit(String perUnit) {
        this.perUnit = perUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_amount")
    public String totalAmount;
    public MessagePrice withTotalAmount(String totalAmount) {
        this.totalAmount = totalAmount;
        return this;
    }
}