package openapisdk.models.operations;



public class UpdateBotLocaleResponse {
    public Object conflictException;
    public UpdateBotLocaleResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateBotLocaleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateBotLocaleResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object preconditionFailedException;
    public UpdateBotLocaleResponse withPreconditionFailedException(Object preconditionFailedException) {
        this.preconditionFailedException = preconditionFailedException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public UpdateBotLocaleResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public UpdateBotLocaleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateBotLocaleResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateBotLocaleResponse updateBotLocaleResponse;
    public UpdateBotLocaleResponse withUpdateBotLocaleResponse(openapisdk.models.shared.UpdateBotLocaleResponse updateBotLocaleResponse) {
        this.updateBotLocaleResponse = updateBotLocaleResponse;
        return this;
    }
    public Object validationException;
    public UpdateBotLocaleResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}