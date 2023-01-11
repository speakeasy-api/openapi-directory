package openapisdk.models.operations;



public class CreateBotVersionResponse {
    public Object conflictException;
    public CreateBotVersionResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateBotVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateBotVersionResponse createBotVersionResponse;
    public CreateBotVersionResponse withCreateBotVersionResponse(openapisdk.models.shared.CreateBotVersionResponse createBotVersionResponse) {
        this.createBotVersionResponse = createBotVersionResponse;
        return this;
    }
    public Object internalServerException;
    public CreateBotVersionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object preconditionFailedException;
    public CreateBotVersionResponse withPreconditionFailedException(Object preconditionFailedException) {
        this.preconditionFailedException = preconditionFailedException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateBotVersionResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateBotVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateBotVersionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateBotVersionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}