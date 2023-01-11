package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchAssociateAssessmentReportEvidenceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public AssessmentReportEvidenceError[] errors;
    public BatchAssociateAssessmentReportEvidenceResponse withErrors(AssessmentReportEvidenceError[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evidenceIds")
    public String[] evidenceIds;
    public BatchAssociateAssessmentReportEvidenceResponse withEvidenceIds(String[] evidenceIds) {
        this.evidenceIds = evidenceIds;
        return this;
    }
}