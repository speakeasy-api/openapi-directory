package openapisdk.models.operations;



public class CreateBotAliasResponse {
    public Object conflictException;
    public CreateBotAliasResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateBotAliasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateBotAliasResponse createBotAliasResponse;
    public CreateBotAliasResponse withCreateBotAliasResponse(openapisdk.models.shared.CreateBotAliasResponse createBotAliasResponse) {
        this.createBotAliasResponse = createBotAliasResponse;
        return this;
    }
    public Object internalServerException;
    public CreateBotAliasResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object preconditionFailedException;
    public CreateBotAliasResponse withPreconditionFailedException(Object preconditionFailedException) {
        this.preconditionFailedException = preconditionFailedException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateBotAliasResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateBotAliasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateBotAliasResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateBotAliasResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}