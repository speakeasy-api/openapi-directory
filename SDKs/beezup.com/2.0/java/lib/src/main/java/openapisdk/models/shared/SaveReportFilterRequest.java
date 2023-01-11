package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SaveReportFilterRequest {
    @JsonProperty("parameters")
    public ReportFilterParameters parameters;
    public SaveReportFilterRequest withParameters(ReportFilterParameters parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonProperty("reportFilterName")
    public String reportFilterName;
    public SaveReportFilterRequest withReportFilterName(String reportFilterName) {
        this.reportFilterName = reportFilterName;
        return this;
    }
}