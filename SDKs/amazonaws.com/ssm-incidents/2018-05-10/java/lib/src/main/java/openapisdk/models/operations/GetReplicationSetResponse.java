package openapisdk.models.operations;



public class GetReplicationSetResponse {
    public Object accessDeniedException;
    public GetReplicationSetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetReplicationSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetReplicationSetOutput getReplicationSetOutput;
    public GetReplicationSetResponse withGetReplicationSetOutput(openapisdk.models.shared.GetReplicationSetOutput getReplicationSetOutput) {
        this.getReplicationSetOutput = getReplicationSetOutput;
        return this;
    }
    public Object internalServerException;
    public GetReplicationSetResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetReplicationSetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetReplicationSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetReplicationSetResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetReplicationSetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}