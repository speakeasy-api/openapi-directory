package openapisdk.models.operations;



public class UpdateAssessmentStatusResponse {
    public Object accessDeniedException;
    public UpdateAssessmentStatusResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateAssessmentStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateAssessmentStatusResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateAssessmentStatusResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateAssessmentStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateAssessmentStatusResponse updateAssessmentStatusResponse;
    public UpdateAssessmentStatusResponse withUpdateAssessmentStatusResponse(openapisdk.models.shared.UpdateAssessmentStatusResponse updateAssessmentStatusResponse) {
        this.updateAssessmentStatusResponse = updateAssessmentStatusResponse;
        return this;
    }
    public Object validationException;
    public UpdateAssessmentStatusResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}