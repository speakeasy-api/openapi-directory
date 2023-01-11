package openapisdk.models.operations;



public class UpdateReplicationSetResponse {
    public Object accessDeniedException;
    public UpdateReplicationSetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateReplicationSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateReplicationSetResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateReplicationSetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateReplicationSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateReplicationSetResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public java.util.Map<String, Object> updateReplicationSetOutput;
    public UpdateReplicationSetResponse withUpdateReplicationSetOutput(java.util.Map<String, Object> updateReplicationSetOutput) {
        this.updateReplicationSetOutput = updateReplicationSetOutput;
        return this;
    }
    public Object validationException;
    public UpdateReplicationSetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}