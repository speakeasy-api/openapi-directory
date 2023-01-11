package openapisdk.models.operations;



public class PutFeedbackResponse {
    public Object accessDeniedException;
    public PutFeedbackResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public PutFeedbackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public PutFeedbackResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public java.util.Map<String, Object> putFeedbackResponse;
    public PutFeedbackResponse withPutFeedbackResponse(java.util.Map<String, Object> putFeedbackResponse) {
        this.putFeedbackResponse = putFeedbackResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public PutFeedbackResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutFeedbackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public PutFeedbackResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object validationException;
    public PutFeedbackResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}