package openapisdk.models.operations;



public class ValidateAssessmentReportIntegrityResponse {
    public Object accessDeniedException;
    public ValidateAssessmentReportIntegrityResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ValidateAssessmentReportIntegrityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ValidateAssessmentReportIntegrityResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public ValidateAssessmentReportIntegrityResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ValidateAssessmentReportIntegrityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidateAssessmentReportIntegrityResponse validateAssessmentReportIntegrityResponse;
    public ValidateAssessmentReportIntegrityResponse withValidateAssessmentReportIntegrityResponse(openapisdk.models.shared.ValidateAssessmentReportIntegrityResponse validateAssessmentReportIntegrityResponse) {
        this.validateAssessmentReportIntegrityResponse = validateAssessmentReportIntegrityResponse;
        return this;
    }
    public Object validationException;
    public ValidateAssessmentReportIntegrityResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}