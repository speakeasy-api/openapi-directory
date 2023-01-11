package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchImportEvidenceToAssessmentControlRequestBody {
    @JsonProperty("manualEvidence")
    public openapisdk.models.shared.ManualEvidence[] manualEvidence;
    public BatchImportEvidenceToAssessmentControlRequestBody withManualEvidence(openapisdk.models.shared.ManualEvidence[] manualEvidence) {
        this.manualEvidence = manualEvidence;
        return this;
    }
}