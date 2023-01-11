package openapisdk.models.operations;



public class StopApplicationResponse {
    public Object concurrentModificationException;
    public StopApplicationResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public StopApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidApplicationConfigurationException;
    public StopApplicationResponse withInvalidApplicationConfigurationException(Object invalidApplicationConfigurationException) {
        this.invalidApplicationConfigurationException = invalidApplicationConfigurationException;
        return this;
    }
    public Object invalidArgumentException;
    public StopApplicationResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidRequestException;
    public StopApplicationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceInUseException;
    public StopApplicationResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public StopApplicationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> stopApplicationResponse;
    public StopApplicationResponse withStopApplicationResponse(java.util.Map<String, Object> stopApplicationResponse) {
        this.stopApplicationResponse = stopApplicationResponse;
        return this;
    }
}