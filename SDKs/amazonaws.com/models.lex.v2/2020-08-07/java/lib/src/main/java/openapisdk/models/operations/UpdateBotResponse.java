package openapisdk.models.operations;



public class UpdateBotResponse {
    public Object conflictException;
    public UpdateBotResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateBotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateBotResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object preconditionFailedException;
    public UpdateBotResponse withPreconditionFailedException(Object preconditionFailedException) {
        this.preconditionFailedException = preconditionFailedException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public UpdateBotResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public UpdateBotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateBotResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateBotResponse updateBotResponse;
    public UpdateBotResponse withUpdateBotResponse(openapisdk.models.shared.UpdateBotResponse updateBotResponse) {
        this.updateBotResponse = updateBotResponse;
        return this;
    }
    public Object validationException;
    public UpdateBotResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}