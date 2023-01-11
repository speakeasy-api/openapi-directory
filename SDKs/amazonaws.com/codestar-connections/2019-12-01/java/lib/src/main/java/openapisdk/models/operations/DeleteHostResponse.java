package openapisdk.models.operations;



public class DeleteHostResponse {
    public String contentType;
    public DeleteHostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteHostOutput;
    public DeleteHostResponse withDeleteHostOutput(java.util.Map<String, Object> deleteHostOutput) {
        this.deleteHostOutput = deleteHostOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteHostResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object resourceUnavailableException;
    public DeleteHostResponse withResourceUnavailableException(Object resourceUnavailableException) {
        this.resourceUnavailableException = resourceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteHostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}