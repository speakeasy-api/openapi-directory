package openapisdk.models.operations;



public class DeleteSystemInstanceResponse {
    public String contentType;
    public DeleteSystemInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteSystemInstanceResponse;
    public DeleteSystemInstanceResponse withDeleteSystemInstanceResponse(java.util.Map<String, Object> deleteSystemInstanceResponse) {
        this.deleteSystemInstanceResponse = deleteSystemInstanceResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteSystemInstanceResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteSystemInstanceResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteSystemInstanceResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Long statusCode;
    public DeleteSystemInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteSystemInstanceResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}