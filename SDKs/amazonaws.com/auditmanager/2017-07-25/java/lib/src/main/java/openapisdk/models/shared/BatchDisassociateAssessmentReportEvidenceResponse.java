package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchDisassociateAssessmentReportEvidenceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public AssessmentReportEvidenceError[] errors;
    public BatchDisassociateAssessmentReportEvidenceResponse withErrors(AssessmentReportEvidenceError[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evidenceIds")
    public String[] evidenceIds;
    public BatchDisassociateAssessmentReportEvidenceResponse withEvidenceIds(String[] evidenceIds) {
        this.evidenceIds = evidenceIds;
        return this;
    }
}