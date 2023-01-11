package openapisdk.models.operations;



public class UpdateBotAliasResponse {
    public Object conflictException;
    public UpdateBotAliasResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateBotAliasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateBotAliasResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object preconditionFailedException;
    public UpdateBotAliasResponse withPreconditionFailedException(Object preconditionFailedException) {
        this.preconditionFailedException = preconditionFailedException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public UpdateBotAliasResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public UpdateBotAliasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateBotAliasResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateBotAliasResponse updateBotAliasResponse;
    public UpdateBotAliasResponse withUpdateBotAliasResponse(openapisdk.models.shared.UpdateBotAliasResponse updateBotAliasResponse) {
        this.updateBotAliasResponse = updateBotAliasResponse;
        return this;
    }
    public Object validationException;
    public UpdateBotAliasResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}