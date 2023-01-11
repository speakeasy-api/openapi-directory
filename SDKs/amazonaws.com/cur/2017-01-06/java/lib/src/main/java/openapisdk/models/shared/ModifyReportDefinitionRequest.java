package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ModifyReportDefinitionRequest {
    @JsonProperty("ReportDefinition")
    public ReportDefinition reportDefinition;
    public ModifyReportDefinitionRequest withReportDefinition(ReportDefinition reportDefinition) {
        this.reportDefinition = reportDefinition;
        return this;
    }
    @JsonProperty("ReportName")
    public String reportName;
    public ModifyReportDefinitionRequest withReportName(String reportName) {
        this.reportName = reportName;
        return this;
    }
}