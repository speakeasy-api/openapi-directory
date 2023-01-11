package openapisdk.models.operations;



public class DeleteConnectionResponse {
    public String contentType;
    public DeleteConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteConnectionOutput;
    public DeleteConnectionResponse withDeleteConnectionOutput(java.util.Map<String, Object> deleteConnectionOutput) {
        this.deleteConnectionOutput = deleteConnectionOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteConnectionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}