package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetExchangeRateRequest {
    @JsonProperty("currency")
    public String currency;
    public GetExchangeRateRequest withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
}