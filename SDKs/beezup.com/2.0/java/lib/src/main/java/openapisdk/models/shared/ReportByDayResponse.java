package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReportByDayResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public ReportByDayResponse withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("days")
    public ReportByDay[] days;
    public ReportByDayResponse withDays(ReportByDay[] days) {
        this.days = days;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("globalPerformanceIndicators")
    public ReportByDayGlobal globalPerformanceIndicators;
    public ReportByDayResponse withGlobalPerformanceIndicators(ReportByDayGlobal globalPerformanceIndicators) {
        this.globalPerformanceIndicators = globalPerformanceIndicators;
        return this;
    }
}