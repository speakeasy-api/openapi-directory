package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchImportEvidenceToAssessmentControlResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public BatchImportEvidenceToAssessmentControlError[] errors;
    public BatchImportEvidenceToAssessmentControlResponse withErrors(BatchImportEvidenceToAssessmentControlError[] errors) {
        this.errors = errors;
        return this;
    }
}