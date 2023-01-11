package openapisdk.models.operations;



public class CreateReplicationSetResponse {
    public Object accessDeniedException;
    public CreateReplicationSetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateReplicationSetResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateReplicationSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateReplicationSetOutput createReplicationSetOutput;
    public CreateReplicationSetResponse withCreateReplicationSetOutput(openapisdk.models.shared.CreateReplicationSetOutput createReplicationSetOutput) {
        this.createReplicationSetOutput = createReplicationSetOutput;
        return this;
    }
    public Object internalServerException;
    public CreateReplicationSetResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateReplicationSetResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateReplicationSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateReplicationSetResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateReplicationSetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}