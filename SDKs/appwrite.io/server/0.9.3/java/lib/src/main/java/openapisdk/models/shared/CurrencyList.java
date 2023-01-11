package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CurrencyList
 * Currencies List
**/
public class CurrencyList {
    @JsonProperty("currencies")
    public Currency[] currencies;
    public CurrencyList withCurrencies(Currency[] currencies) {
        this.currencies = currencies;
        return this;
    }
    @JsonProperty("sum")
    public Integer sum;
    public CurrencyList withSum(Integer sum) {
        this.sum = sum;
        return this;
    }
}