package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MonetaryAmount
 * A number that represents the monetary amount for an offering or transaction.
**/
public class MonetaryAmount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public MonetaryAmount withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public CurrencyCodeEnum currencyCode;
    public MonetaryAmount withCurrencyCode(CurrencyCodeEnum currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
}