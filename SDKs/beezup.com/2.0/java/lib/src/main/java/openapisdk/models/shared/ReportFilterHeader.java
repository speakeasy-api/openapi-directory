package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReportFilterHeader {
    @JsonProperty("links")
    public ReportFilterHeaderLinks links;
    public ReportFilterHeader withLinks(ReportFilterHeaderLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("reportFilterId")
    public String reportFilterId;
    public ReportFilterHeader withReportFilterId(String reportFilterId) {
        this.reportFilterId = reportFilterId;
        return this;
    }
    @JsonProperty("reportFilterName")
    public String reportFilterName;
    public ReportFilterHeader withReportFilterName(String reportFilterName) {
        this.reportFilterName = reportFilterName;
        return this;
    }
    @JsonProperty("reportType")
    public ReportTypeEnum reportType;
    public ReportFilterHeader withReportType(ReportTypeEnum reportType) {
        this.reportType = reportType;
        return this;
    }
}