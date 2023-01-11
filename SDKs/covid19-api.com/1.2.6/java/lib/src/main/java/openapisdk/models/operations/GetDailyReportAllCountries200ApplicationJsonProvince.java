package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDailyReportAllCountries200ApplicationJsonProvince {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Long active;
    public GetDailyReportAllCountries200ApplicationJsonProvince withActive(Long active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confirmed")
    public Long confirmed;
    public GetDailyReportAllCountries200ApplicationJsonProvince withConfirmed(Long confirmed) {
        this.confirmed = confirmed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deaths")
    public Long deaths;
    public GetDailyReportAllCountries200ApplicationJsonProvince withDeaths(Long deaths) {
        this.deaths = deaths;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recovered")
    public Long recovered;
    public GetDailyReportAllCountries200ApplicationJsonProvince withRecovered(Long recovered) {
        this.recovered = recovered;
        return this;
    }
}