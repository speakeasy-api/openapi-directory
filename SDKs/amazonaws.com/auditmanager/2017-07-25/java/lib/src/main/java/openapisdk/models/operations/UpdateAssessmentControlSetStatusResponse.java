package openapisdk.models.operations;



public class UpdateAssessmentControlSetStatusResponse {
    public Object accessDeniedException;
    public UpdateAssessmentControlSetStatusResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateAssessmentControlSetStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateAssessmentControlSetStatusResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateAssessmentControlSetStatusResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateAssessmentControlSetStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateAssessmentControlSetStatusResponse updateAssessmentControlSetStatusResponse;
    public UpdateAssessmentControlSetStatusResponse withUpdateAssessmentControlSetStatusResponse(openapisdk.models.shared.UpdateAssessmentControlSetStatusResponse updateAssessmentControlSetStatusResponse) {
        this.updateAssessmentControlSetStatusResponse = updateAssessmentControlSetStatusResponse;
        return this;
    }
    public Object validationException;
    public UpdateAssessmentControlSetStatusResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}