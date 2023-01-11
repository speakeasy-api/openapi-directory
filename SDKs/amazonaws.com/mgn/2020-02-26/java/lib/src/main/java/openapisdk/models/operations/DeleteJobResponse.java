package openapisdk.models.operations;



public class DeleteJobResponse {
    public Object conflictException;
    public DeleteJobResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteJobResponse;
    public DeleteJobResponse withDeleteJobResponse(java.util.Map<String, Object> deleteJobResponse) {
        this.deleteJobResponse = deleteJobResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object uninitializedAccountException;
    public DeleteJobResponse withUninitializedAccountException(Object uninitializedAccountException) {
        this.uninitializedAccountException = uninitializedAccountException;
        return this;
    }
}