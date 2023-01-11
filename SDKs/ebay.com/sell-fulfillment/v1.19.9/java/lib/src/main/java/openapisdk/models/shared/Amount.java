package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Amount
 * This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable.
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
    @JsonProperty("value")
    public String value;
    public Amount withValue(String value) {
        this.value = value;
        return this;
    }
}