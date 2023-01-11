package openapisdk.models.operations;



public class UpdateAssessmentFrameworkResponse {
    public Object accessDeniedException;
    public UpdateAssessmentFrameworkResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateAssessmentFrameworkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateAssessmentFrameworkResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateAssessmentFrameworkResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateAssessmentFrameworkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateAssessmentFrameworkResponse updateAssessmentFrameworkResponse;
    public UpdateAssessmentFrameworkResponse withUpdateAssessmentFrameworkResponse(openapisdk.models.shared.UpdateAssessmentFrameworkResponse updateAssessmentFrameworkResponse) {
        this.updateAssessmentFrameworkResponse = updateAssessmentFrameworkResponse;
        return this;
    }
    public Object validationException;
    public UpdateAssessmentFrameworkResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}