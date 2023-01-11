package openapisdk.models.operations;



public class AdminUpdateAuthEventFeedbackResponse {
    public java.util.Map<String, Object> adminUpdateAuthEventFeedbackResponse;
    public AdminUpdateAuthEventFeedbackResponse withAdminUpdateAuthEventFeedbackResponse(java.util.Map<String, Object> adminUpdateAuthEventFeedbackResponse) {
        this.adminUpdateAuthEventFeedbackResponse = adminUpdateAuthEventFeedbackResponse;
        return this;
    }
    public String contentType;
    public AdminUpdateAuthEventFeedbackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public AdminUpdateAuthEventFeedbackResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public AdminUpdateAuthEventFeedbackResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public AdminUpdateAuthEventFeedbackResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public AdminUpdateAuthEventFeedbackResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AdminUpdateAuthEventFeedbackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public AdminUpdateAuthEventFeedbackResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object userNotFoundException;
    public AdminUpdateAuthEventFeedbackResponse withUserNotFoundException(Object userNotFoundException) {
        this.userNotFoundException = userNotFoundException;
        return this;
    }
    public Object userPoolAddOnNotEnabledException;
    public AdminUpdateAuthEventFeedbackResponse withUserPoolAddOnNotEnabledException(Object userPoolAddOnNotEnabledException) {
        this.userPoolAddOnNotEnabledException = userPoolAddOnNotEnabledException;
        return this;
    }
}