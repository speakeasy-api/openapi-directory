package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteReportDefinitionRequest
 * Deletes the specified report.
**/
public class DeleteReportDefinitionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReportName")
    public String reportName;
    public DeleteReportDefinitionRequest withReportName(String reportName) {
        this.reportName = reportName;
        return this;
    }
}