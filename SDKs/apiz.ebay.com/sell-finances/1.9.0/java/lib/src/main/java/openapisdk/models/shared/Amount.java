package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Amount
 * This type is used to express the dollar value and currency used for any transaction retrieved with the Finances API, including an order total, a seller payout, a buyer refund, or a seller credit.
**/
public class Amount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("convertedFromCurrency")
    public String convertedFromCurrency;
    public Amount withConvertedFromCurrency(String convertedFromCurrency) {
        this.convertedFromCurrency = convertedFromCurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("convertedFromValue")
    public String convertedFromValue;
    public Amount withConvertedFromValue(String convertedFromValue) {
        this.convertedFromValue = convertedFromValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public Amount withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exchangeRate")
    public String exchangeRate;
    public Amount withExchangeRate(String exchangeRate) {
        this.exchangeRate = exchangeRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Amount withValue(String value) {
        this.value = value;
        return this;
    }
}