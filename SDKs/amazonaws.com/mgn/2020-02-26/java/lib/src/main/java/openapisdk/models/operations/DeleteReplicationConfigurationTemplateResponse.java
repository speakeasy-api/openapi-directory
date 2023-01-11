package openapisdk.models.operations;



public class DeleteReplicationConfigurationTemplateResponse {
    public Object conflictException;
    public DeleteReplicationConfigurationTemplateResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteReplicationConfigurationTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteReplicationConfigurationTemplateResponse;
    public DeleteReplicationConfigurationTemplateResponse withDeleteReplicationConfigurationTemplateResponse(java.util.Map<String, Object> deleteReplicationConfigurationTemplateResponse) {
        this.deleteReplicationConfigurationTemplateResponse = deleteReplicationConfigurationTemplateResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteReplicationConfigurationTemplateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteReplicationConfigurationTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object uninitializedAccountException;
    public DeleteReplicationConfigurationTemplateResponse withUninitializedAccountException(Object uninitializedAccountException) {
        this.uninitializedAccountException = uninitializedAccountException;
        return this;
    }
}