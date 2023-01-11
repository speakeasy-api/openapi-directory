package openapisdk.models.operations;



public class NotifyAppValidationOutputResponse {
    public String contentType;
    public NotifyAppValidationOutputResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalError;
    public NotifyAppValidationOutputResponse withInternalError(Object internalError) {
        this.internalError = internalError;
        return this;
    }
    public Object invalidParameterException;
    public NotifyAppValidationOutputResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object missingRequiredParameterException;
    public NotifyAppValidationOutputResponse withMissingRequiredParameterException(Object missingRequiredParameterException) {
        this.missingRequiredParameterException = missingRequiredParameterException;
        return this;
    }
    public java.util.Map<String, Object> notifyAppValidationOutputResponse;
    public NotifyAppValidationOutputResponse withNotifyAppValidationOutputResponse(java.util.Map<String, Object> notifyAppValidationOutputResponse) {
        this.notifyAppValidationOutputResponse = notifyAppValidationOutputResponse;
        return this;
    }
    public Object operationNotPermittedException;
    public NotifyAppValidationOutputResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Long statusCode;
    public NotifyAppValidationOutputResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedOperationException;
    public NotifyAppValidationOutputResponse withUnauthorizedOperationException(Object unauthorizedOperationException) {
        this.unauthorizedOperationException = unauthorizedOperationException;
        return this;
    }
}