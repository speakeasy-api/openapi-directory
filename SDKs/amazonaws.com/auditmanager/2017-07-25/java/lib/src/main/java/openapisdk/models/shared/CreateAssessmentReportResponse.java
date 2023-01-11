package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAssessmentReportResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assessmentReport")
    public AssessmentReport assessmentReport;
    public CreateAssessmentReportResponse withAssessmentReport(AssessmentReport assessmentReport) {
        this.assessmentReport = assessmentReport;
        return this;
    }
}