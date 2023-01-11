package openapisdk.models.operations;



public class UpdateAuthEventFeedbackResponse {
    public String contentType;
    public UpdateAuthEventFeedbackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public UpdateAuthEventFeedbackResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public UpdateAuthEventFeedbackResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public UpdateAuthEventFeedbackResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateAuthEventFeedbackResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateAuthEventFeedbackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateAuthEventFeedbackResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public java.util.Map<String, Object> updateAuthEventFeedbackResponse;
    public UpdateAuthEventFeedbackResponse withUpdateAuthEventFeedbackResponse(java.util.Map<String, Object> updateAuthEventFeedbackResponse) {
        this.updateAuthEventFeedbackResponse = updateAuthEventFeedbackResponse;
        return this;
    }
    public Object userNotFoundException;
    public UpdateAuthEventFeedbackResponse withUserNotFoundException(Object userNotFoundException) {
        this.userNotFoundException = userNotFoundException;
        return this;
    }
    public Object userPoolAddOnNotEnabledException;
    public UpdateAuthEventFeedbackResponse withUserPoolAddOnNotEnabledException(Object userPoolAddOnNotEnabledException) {
        this.userPoolAddOnNotEnabledException = userPoolAddOnNotEnabledException;
        return this;
    }
}