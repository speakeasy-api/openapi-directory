package openapisdk.models.operations;



public class BuildBotLocaleResponse {
    public openapisdk.models.shared.BuildBotLocaleResponse buildBotLocaleResponse;
    public BuildBotLocaleResponse withBuildBotLocaleResponse(openapisdk.models.shared.BuildBotLocaleResponse buildBotLocaleResponse) {
        this.buildBotLocaleResponse = buildBotLocaleResponse;
        return this;
    }
    public Object conflictException;
    public BuildBotLocaleResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public BuildBotLocaleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public BuildBotLocaleResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object preconditionFailedException;
    public BuildBotLocaleResponse withPreconditionFailedException(Object preconditionFailedException) {
        this.preconditionFailedException = preconditionFailedException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public BuildBotLocaleResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public BuildBotLocaleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public BuildBotLocaleResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public BuildBotLocaleResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}