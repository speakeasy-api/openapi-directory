package openapisdk.models.operations;



public class CreateConfigurationSetResponse {
    public Object alreadyExistsException;
    public CreateConfigurationSetResponse withAlreadyExistsException(Object alreadyExistsException) {
        this.alreadyExistsException = alreadyExistsException;
        return this;
    }
    public Object badRequestException;
    public CreateConfigurationSetResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object concurrentModificationException;
    public CreateConfigurationSetResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public CreateConfigurationSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createConfigurationSetResponse;
    public CreateConfigurationSetResponse withCreateConfigurationSetResponse(java.util.Map<String, Object> createConfigurationSetResponse) {
        this.createConfigurationSetResponse = createConfigurationSetResponse;
        return this;
    }
    public Object limitExceededException;
    public CreateConfigurationSetResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public CreateConfigurationSetResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateConfigurationSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateConfigurationSetResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}