package openapisdk.models.operations;



public class DeleteConfigurationSetResponse {
    public Object badRequestException;
    public DeleteConfigurationSetResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object concurrentModificationException;
    public DeleteConfigurationSetResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteConfigurationSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteConfigurationSetResponse;
    public DeleteConfigurationSetResponse withDeleteConfigurationSetResponse(java.util.Map<String, Object> deleteConfigurationSetResponse) {
        this.deleteConfigurationSetResponse = deleteConfigurationSetResponse;
        return this;
    }
    public Object notFoundException;
    public DeleteConfigurationSetResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteConfigurationSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteConfigurationSetResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}