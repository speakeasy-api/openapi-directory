package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReportByDayGlobalAllChannels {
    @JsonProperty("performanceIndicator")
    public Double performanceIndicator;
    public ReportByDayGlobalAllChannels withPerformanceIndicator(Double performanceIndicator) {
        this.performanceIndicator = performanceIndicator;
        return this;
    }
}