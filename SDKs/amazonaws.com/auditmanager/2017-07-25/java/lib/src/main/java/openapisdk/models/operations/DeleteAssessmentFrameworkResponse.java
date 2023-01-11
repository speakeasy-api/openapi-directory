package openapisdk.models.operations;



public class DeleteAssessmentFrameworkResponse {
    public Object accessDeniedException;
    public DeleteAssessmentFrameworkResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteAssessmentFrameworkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteAssessmentFrameworkResponse;
    public DeleteAssessmentFrameworkResponse withDeleteAssessmentFrameworkResponse(java.util.Map<String, Object> deleteAssessmentFrameworkResponse) {
        this.deleteAssessmentFrameworkResponse = deleteAssessmentFrameworkResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteAssessmentFrameworkResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteAssessmentFrameworkResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteAssessmentFrameworkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteAssessmentFrameworkResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}