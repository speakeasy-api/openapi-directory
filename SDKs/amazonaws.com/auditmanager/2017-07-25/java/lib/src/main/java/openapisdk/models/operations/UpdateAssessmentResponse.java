package openapisdk.models.operations;



public class UpdateAssessmentResponse {
    public Object accessDeniedException;
    public UpdateAssessmentResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateAssessmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateAssessmentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateAssessmentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateAssessmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateAssessmentResponse updateAssessmentResponse;
    public UpdateAssessmentResponse withUpdateAssessmentResponse(openapisdk.models.shared.UpdateAssessmentResponse updateAssessmentResponse) {
        this.updateAssessmentResponse = updateAssessmentResponse;
        return this;
    }
    public Object validationException;
    public UpdateAssessmentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}