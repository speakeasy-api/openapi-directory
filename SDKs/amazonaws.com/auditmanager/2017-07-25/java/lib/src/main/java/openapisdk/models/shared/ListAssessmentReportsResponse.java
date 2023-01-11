package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAssessmentReportsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assessmentReports")
    public AssessmentReportMetadata[] assessmentReports;
    public ListAssessmentReportsResponse withAssessmentReports(AssessmentReportMetadata[] assessmentReports) {
        this.assessmentReports = assessmentReports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListAssessmentReportsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}