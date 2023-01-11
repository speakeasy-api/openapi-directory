package openapisdk.models.operations;



public class DeleteSourceServerResponse {
    public Object conflictException;
    public DeleteSourceServerResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteSourceServerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteSourceServerResponse;
    public DeleteSourceServerResponse withDeleteSourceServerResponse(java.util.Map<String, Object> deleteSourceServerResponse) {
        this.deleteSourceServerResponse = deleteSourceServerResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteSourceServerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteSourceServerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object uninitializedAccountException;
    public DeleteSourceServerResponse withUninitializedAccountException(Object uninitializedAccountException) {
        this.uninitializedAccountException = uninitializedAccountException;
        return this;
    }
}