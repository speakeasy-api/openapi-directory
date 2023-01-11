package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetReportGroupTrendOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rawData")
    public ReportWithRawData[] rawData;
    public GetReportGroupTrendOutput withRawData(ReportWithRawData[] rawData) {
        this.rawData = rawData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stats")
    public ReportGroupTrendStats stats;
    public GetReportGroupTrendOutput withStats(ReportGroupTrendStats stats) {
        this.stats = stats;
        return this;
    }
}