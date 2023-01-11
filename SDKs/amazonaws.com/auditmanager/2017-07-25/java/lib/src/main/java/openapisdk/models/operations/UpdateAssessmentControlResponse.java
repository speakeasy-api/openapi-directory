package openapisdk.models.operations;



public class UpdateAssessmentControlResponse {
    public Object accessDeniedException;
    public UpdateAssessmentControlResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateAssessmentControlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateAssessmentControlResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateAssessmentControlResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateAssessmentControlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateAssessmentControlResponse updateAssessmentControlResponse;
    public UpdateAssessmentControlResponse withUpdateAssessmentControlResponse(openapisdk.models.shared.UpdateAssessmentControlResponse updateAssessmentControlResponse) {
        this.updateAssessmentControlResponse = updateAssessmentControlResponse;
        return this;
    }
    public Object validationException;
    public UpdateAssessmentControlResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}