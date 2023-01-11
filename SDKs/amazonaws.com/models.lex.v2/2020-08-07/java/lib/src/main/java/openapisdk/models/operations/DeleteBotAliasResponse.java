package openapisdk.models.operations;



public class DeleteBotAliasResponse {
    public Object conflictException;
    public DeleteBotAliasResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteBotAliasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteBotAliasResponse deleteBotAliasResponse;
    public DeleteBotAliasResponse withDeleteBotAliasResponse(openapisdk.models.shared.DeleteBotAliasResponse deleteBotAliasResponse) {
        this.deleteBotAliasResponse = deleteBotAliasResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteBotAliasResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object preconditionFailedException;
    public DeleteBotAliasResponse withPreconditionFailedException(Object preconditionFailedException) {
        this.preconditionFailedException = preconditionFailedException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DeleteBotAliasResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DeleteBotAliasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteBotAliasResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteBotAliasResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}