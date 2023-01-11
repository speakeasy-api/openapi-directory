package openapisdk.models.operations;



public class DeleteBotVersionResponse {
    public Object conflictException;
    public DeleteBotVersionResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteBotVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteBotVersionResponse deleteBotVersionResponse;
    public DeleteBotVersionResponse withDeleteBotVersionResponse(openapisdk.models.shared.DeleteBotVersionResponse deleteBotVersionResponse) {
        this.deleteBotVersionResponse = deleteBotVersionResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteBotVersionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object preconditionFailedException;
    public DeleteBotVersionResponse withPreconditionFailedException(Object preconditionFailedException) {
        this.preconditionFailedException = preconditionFailedException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DeleteBotVersionResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DeleteBotVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteBotVersionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteBotVersionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}