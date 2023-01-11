package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssessmentReportEvidenceError
 *  An error entity for the <code>AssessmentReportEvidence</code> API. This is used to provide more meaningful errors than a simple string message. 
**/
public class AssessmentReportEvidenceError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCode")
    public String errorCode;
    public AssessmentReportEvidenceError withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public AssessmentReportEvidenceError withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evidenceId")
    public String evidenceId;
    public AssessmentReportEvidenceError withEvidenceId(String evidenceId) {
        this.evidenceId = evidenceId;
        return this;
    }
}