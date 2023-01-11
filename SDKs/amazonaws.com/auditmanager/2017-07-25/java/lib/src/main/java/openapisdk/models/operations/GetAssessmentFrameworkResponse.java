package openapisdk.models.operations;



public class GetAssessmentFrameworkResponse {
    public Object accessDeniedException;
    public GetAssessmentFrameworkResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetAssessmentFrameworkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAssessmentFrameworkResponse getAssessmentFrameworkResponse;
    public GetAssessmentFrameworkResponse withGetAssessmentFrameworkResponse(openapisdk.models.shared.GetAssessmentFrameworkResponse getAssessmentFrameworkResponse) {
        this.getAssessmentFrameworkResponse = getAssessmentFrameworkResponse;
        return this;
    }
    public Object internalServerException;
    public GetAssessmentFrameworkResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetAssessmentFrameworkResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetAssessmentFrameworkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetAssessmentFrameworkResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}