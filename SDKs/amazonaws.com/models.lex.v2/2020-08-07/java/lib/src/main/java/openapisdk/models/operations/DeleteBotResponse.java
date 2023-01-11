package openapisdk.models.operations;



public class DeleteBotResponse {
    public Object conflictException;
    public DeleteBotResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteBotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteBotResponse deleteBotResponse;
    public DeleteBotResponse withDeleteBotResponse(openapisdk.models.shared.DeleteBotResponse deleteBotResponse) {
        this.deleteBotResponse = deleteBotResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteBotResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object preconditionFailedException;
    public DeleteBotResponse withPreconditionFailedException(Object preconditionFailedException) {
        this.preconditionFailedException = preconditionFailedException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DeleteBotResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DeleteBotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteBotResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteBotResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}