package openapisdk.models.operations;



public class GetFeedbackResponse {
    public Object accessDeniedException;
    public GetFeedbackResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetFeedbackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetFeedbackResponse getFeedbackResponse;
    public GetFeedbackResponse withGetFeedbackResponse(openapisdk.models.shared.GetFeedbackResponse getFeedbackResponse) {
        this.getFeedbackResponse = getFeedbackResponse;
        return this;
    }
    public Object internalServerException;
    public GetFeedbackResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetFeedbackResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetFeedbackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetFeedbackResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object validationException;
    public GetFeedbackResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}