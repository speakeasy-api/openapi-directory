package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchImportEvidenceToAssessmentControlError
 *  An error entity for the <code>BatchImportEvidenceToAssessmentControl</code> API. This is used to provide more meaningful errors than a simple string message. 
**/
public class BatchImportEvidenceToAssessmentControlError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCode")
    public String errorCode;
    public BatchImportEvidenceToAssessmentControlError withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public BatchImportEvidenceToAssessmentControlError withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manualEvidence")
    public ManualEvidence manualEvidence;
    public BatchImportEvidenceToAssessmentControlError withManualEvidence(ManualEvidence manualEvidence) {
        this.manualEvidence = manualEvidence;
        return this;
    }
}