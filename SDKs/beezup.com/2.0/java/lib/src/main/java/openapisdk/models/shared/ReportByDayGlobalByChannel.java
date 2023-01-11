package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReportByDayGlobalByChannel {
    @JsonProperty("channel")
    public BeezUpCommonChannelBasicInfo channel;
    public ReportByDayGlobalByChannel withChannel(BeezUpCommonChannelBasicInfo channel) {
        this.channel = channel;
        return this;
    }
    @JsonProperty("performanceIndicator")
    public Double performanceIndicator;
    public ReportByDayGlobalByChannel withPerformanceIndicator(Double performanceIndicator) {
        this.performanceIndicator = performanceIndicator;
        return this;
    }
}