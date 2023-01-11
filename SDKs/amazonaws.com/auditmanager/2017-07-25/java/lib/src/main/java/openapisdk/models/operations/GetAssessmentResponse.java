package openapisdk.models.operations;



public class GetAssessmentResponse {
    public Object accessDeniedException;
    public GetAssessmentResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetAssessmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAssessmentResponse getAssessmentResponse;
    public GetAssessmentResponse withGetAssessmentResponse(openapisdk.models.shared.GetAssessmentResponse getAssessmentResponse) {
        this.getAssessmentResponse = getAssessmentResponse;
        return this;
    }
    public Object internalServerException;
    public GetAssessmentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetAssessmentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetAssessmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetAssessmentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}