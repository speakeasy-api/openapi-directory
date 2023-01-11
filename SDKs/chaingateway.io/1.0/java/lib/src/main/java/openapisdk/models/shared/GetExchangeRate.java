package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetExchangeRate {
    @JsonProperty("currency")
    public String currency;
    public GetExchangeRate withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonProperty("ok")
    public Boolean ok;
    public GetExchangeRate withOk(Boolean ok) {
        this.ok = ok;
        return this;
    }
    @JsonProperty("rate")
    public Double rate;
    public GetExchangeRate withRate(Double rate) {
        this.rate = rate;
        return this;
    }
}