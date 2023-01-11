package openapisdk.models.operations;



public class CreateBotResponse {
    public Object conflictException;
    public CreateBotResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateBotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateBotResponse createBotResponse;
    public CreateBotResponse withCreateBotResponse(openapisdk.models.shared.CreateBotResponse createBotResponse) {
        this.createBotResponse = createBotResponse;
        return this;
    }
    public Object internalServerException;
    public CreateBotResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object preconditionFailedException;
    public CreateBotResponse withPreconditionFailedException(Object preconditionFailedException) {
        this.preconditionFailedException = preconditionFailedException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateBotResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateBotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateBotResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateBotResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}