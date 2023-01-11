package openapisdk.models.operations;



public class DeleteBotLocaleResponse {
    public Object conflictException;
    public DeleteBotLocaleResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteBotLocaleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteBotLocaleResponse deleteBotLocaleResponse;
    public DeleteBotLocaleResponse withDeleteBotLocaleResponse(openapisdk.models.shared.DeleteBotLocaleResponse deleteBotLocaleResponse) {
        this.deleteBotLocaleResponse = deleteBotLocaleResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteBotLocaleResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object preconditionFailedException;
    public DeleteBotLocaleResponse withPreconditionFailedException(Object preconditionFailedException) {
        this.preconditionFailedException = preconditionFailedException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DeleteBotLocaleResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DeleteBotLocaleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteBotLocaleResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteBotLocaleResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}