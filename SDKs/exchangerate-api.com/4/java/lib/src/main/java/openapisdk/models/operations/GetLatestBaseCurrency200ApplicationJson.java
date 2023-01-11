package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLatestBaseCurrency200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("base")
    public String base;
    public GetLatestBaseCurrency200ApplicationJson withBase(String base) {
        this.base = base;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public String date;
    public GetLatestBaseCurrency200ApplicationJson withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rates")
    public java.util.Map<String, Double> rates;
    public GetLatestBaseCurrency200ApplicationJson withRates(java.util.Map<String, Double> rates) {
        this.rates = rates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_last_updated")
    public Long timeLastUpdated;
    public GetLatestBaseCurrency200ApplicationJson withTimeLastUpdated(Long timeLastUpdated) {
        this.timeLastUpdated = timeLastUpdated;
        return this;
    }
}