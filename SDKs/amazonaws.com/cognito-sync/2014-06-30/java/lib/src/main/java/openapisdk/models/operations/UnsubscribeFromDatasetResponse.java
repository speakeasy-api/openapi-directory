package openapisdk.models.operations;



public class UnsubscribeFromDatasetResponse {
    public String contentType;
    public UnsubscribeFromDatasetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public UnsubscribeFromDatasetResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidConfigurationException;
    public UnsubscribeFromDatasetResponse withInvalidConfigurationException(Object invalidConfigurationException) {
        this.invalidConfigurationException = invalidConfigurationException;
        return this;
    }
    public Object invalidParameterException;
    public UnsubscribeFromDatasetResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public UnsubscribeFromDatasetResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public UnsubscribeFromDatasetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UnsubscribeFromDatasetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UnsubscribeFromDatasetResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public java.util.Map<String, Object> unsubscribeFromDatasetResponse;
    public UnsubscribeFromDatasetResponse withUnsubscribeFromDatasetResponse(java.util.Map<String, Object> unsubscribeFromDatasetResponse) {
        this.unsubscribeFromDatasetResponse = unsubscribeFromDatasetResponse;
        return this;
    }
}