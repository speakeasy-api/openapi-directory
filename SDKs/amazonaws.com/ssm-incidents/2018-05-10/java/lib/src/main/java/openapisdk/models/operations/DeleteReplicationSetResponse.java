package openapisdk.models.operations;



public class DeleteReplicationSetResponse {
    public Object accessDeniedException;
    public DeleteReplicationSetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteReplicationSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteReplicationSetOutput;
    public DeleteReplicationSetResponse withDeleteReplicationSetOutput(java.util.Map<String, Object> deleteReplicationSetOutput) {
        this.deleteReplicationSetOutput = deleteReplicationSetOutput;
        return this;
    }
    public Object internalServerException;
    public DeleteReplicationSetResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteReplicationSetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteReplicationSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteReplicationSetResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteReplicationSetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}