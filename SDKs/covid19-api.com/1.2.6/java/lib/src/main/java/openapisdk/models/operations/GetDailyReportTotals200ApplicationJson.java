package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDailyReportTotals200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Long active;
    public GetDailyReportTotals200ApplicationJson withActive(Long active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confirmed")
    public Long confirmed;
    public GetDailyReportTotals200ApplicationJson withConfirmed(Long confirmed) {
        this.confirmed = confirmed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("critical")
    public Long critical;
    public GetDailyReportTotals200ApplicationJson withCritical(Long critical) {
        this.critical = critical;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public String date;
    public GetDailyReportTotals200ApplicationJson withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deaths")
    public Long deaths;
    public GetDailyReportTotals200ApplicationJson withDeaths(Long deaths) {
        this.deaths = deaths;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recovered")
    public Long recovered;
    public GetDailyReportTotals200ApplicationJson withRecovered(Long recovered) {
        this.recovered = recovered;
        return this;
    }
}