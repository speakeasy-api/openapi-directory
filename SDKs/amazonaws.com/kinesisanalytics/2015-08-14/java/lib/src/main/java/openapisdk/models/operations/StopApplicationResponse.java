package openapisdk.models.operations;



public class StopApplicationResponse {
    public String contentType;
    public StopApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
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
    public Object unsupportedOperationException;
    public StopApplicationResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}