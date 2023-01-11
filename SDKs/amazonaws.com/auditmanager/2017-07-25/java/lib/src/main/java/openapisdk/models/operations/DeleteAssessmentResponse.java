package openapisdk.models.operations;



public class DeleteAssessmentResponse {
    public Object accessDeniedException;
    public DeleteAssessmentResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteAssessmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteAssessmentResponse;
    public DeleteAssessmentResponse withDeleteAssessmentResponse(java.util.Map<String, Object> deleteAssessmentResponse) {
        this.deleteAssessmentResponse = deleteAssessmentResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteAssessmentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteAssessmentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteAssessmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteAssessmentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}