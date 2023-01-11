package openapisdk.models.operations;



public class SubscribeToDatasetResponse {
    public String contentType;
    public SubscribeToDatasetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public SubscribeToDatasetResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidConfigurationException;
    public SubscribeToDatasetResponse withInvalidConfigurationException(Object invalidConfigurationException) {
        this.invalidConfigurationException = invalidConfigurationException;
        return this;
    }
    public Object invalidParameterException;
    public SubscribeToDatasetResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public SubscribeToDatasetResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public SubscribeToDatasetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public SubscribeToDatasetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> subscribeToDatasetResponse;
    public SubscribeToDatasetResponse withSubscribeToDatasetResponse(java.util.Map<String, Object> subscribeToDatasetResponse) {
        this.subscribeToDatasetResponse = subscribeToDatasetResponse;
        return this;
    }
    public Object tooManyRequestsException;
    public SubscribeToDatasetResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}