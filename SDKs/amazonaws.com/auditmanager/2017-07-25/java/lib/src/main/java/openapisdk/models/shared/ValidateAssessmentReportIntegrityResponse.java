package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ValidateAssessmentReportIntegrityResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signatureAlgorithm")
    public String signatureAlgorithm;
    public ValidateAssessmentReportIntegrityResponse withSignatureAlgorithm(String signatureAlgorithm) {
        this.signatureAlgorithm = signatureAlgorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signatureDateTime")
    public String signatureDateTime;
    public ValidateAssessmentReportIntegrityResponse withSignatureDateTime(String signatureDateTime) {
        this.signatureDateTime = signatureDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signatureKeyId")
    public String signatureKeyId;
    public ValidateAssessmentReportIntegrityResponse withSignatureKeyId(String signatureKeyId) {
        this.signatureKeyId = signatureKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signatureValid")
    public Boolean signatureValid;
    public ValidateAssessmentReportIntegrityResponse withSignatureValid(Boolean signatureValid) {
        this.signatureValid = signatureValid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validationErrors")
    public String[] validationErrors;
    public ValidateAssessmentReportIntegrityResponse withValidationErrors(String[] validationErrors) {
        this.validationErrors = validationErrors;
        return this;
    }
}