package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetReportGroupTrendInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numOfReports")
    public Long numOfReports;
    public GetReportGroupTrendInput withNumOfReports(Long numOfReports) {
        this.numOfReports = numOfReports;
        return this;
    }
    @JsonProperty("reportGroupArn")
    public String reportGroupArn;
    public GetReportGroupTrendInput withReportGroupArn(String reportGroupArn) {
        this.reportGroupArn = reportGroupArn;
        return this;
    }
    @JsonProperty("trendField")
    public ReportGroupTrendFieldTypeEnum trendField;
    public GetReportGroupTrendInput withTrendField(ReportGroupTrendFieldTypeEnum trendField) {
        this.trendField = trendField;
        return this;
    }
}