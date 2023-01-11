package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutReportDefinitionRequest
 * Creates a Cost and Usage Report.
**/
public class PutReportDefinitionRequest {
    @JsonProperty("ReportDefinition")
    public ReportDefinition reportDefinition;
    public PutReportDefinitionRequest withReportDefinition(ReportDefinition reportDefinition) {
        this.reportDefinition = reportDefinition;
        return this;
    }
}