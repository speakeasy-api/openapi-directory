package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteReportDefinitionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportId")
    public String reportId;
    public DeleteReportDefinitionResult withReportId(String reportId) {
        this.reportId = reportId;
        return this;
    }
}