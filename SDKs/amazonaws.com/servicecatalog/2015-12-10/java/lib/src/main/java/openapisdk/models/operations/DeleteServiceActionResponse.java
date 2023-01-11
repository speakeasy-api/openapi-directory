package openapisdk.models.operations;



public class DeleteServiceActionResponse {
    public String contentType;
    public DeleteServiceActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteServiceActionOutput;
    public DeleteServiceActionResponse withDeleteServiceActionOutput(java.util.Map<String, Object> deleteServiceActionOutput) {
        this.deleteServiceActionOutput = deleteServiceActionOutput;
        return this;
    }
    public Object resourceInUseException;
    public DeleteServiceActionResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteServiceActionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteServiceActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}