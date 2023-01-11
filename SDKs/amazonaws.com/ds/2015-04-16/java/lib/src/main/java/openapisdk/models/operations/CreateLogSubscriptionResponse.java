package openapisdk.models.operations;



public class CreateLogSubscriptionResponse {
    public Object clientException;
    public CreateLogSubscriptionResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public CreateLogSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createLogSubscriptionResult;
    public CreateLogSubscriptionResponse withCreateLogSubscriptionResult(java.util.Map<String, Object> createLogSubscriptionResult) {
        this.createLogSubscriptionResult = createLogSubscriptionResult;
        return this;
    }
    public Object entityAlreadyExistsException;
    public CreateLogSubscriptionResponse withEntityAlreadyExistsException(Object entityAlreadyExistsException) {
        this.entityAlreadyExistsException = entityAlreadyExistsException;
        return this;
    }
    public Object entityDoesNotExistException;
    public CreateLogSubscriptionResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object insufficientPermissionsException;
    public CreateLogSubscriptionResponse withInsufficientPermissionsException(Object insufficientPermissionsException) {
        this.insufficientPermissionsException = insufficientPermissionsException;
        return this;
    }
    public Object serviceException;
    public CreateLogSubscriptionResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public CreateLogSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public CreateLogSubscriptionResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}