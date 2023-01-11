package openapisdk.models.operations;



public class CreateBotLocaleResponse {
    public Object conflictException;
    public CreateBotLocaleResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateBotLocaleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateBotLocaleResponse createBotLocaleResponse;
    public CreateBotLocaleResponse withCreateBotLocaleResponse(openapisdk.models.shared.CreateBotLocaleResponse createBotLocaleResponse) {
        this.createBotLocaleResponse = createBotLocaleResponse;
        return this;
    }
    public Object internalServerException;
    public CreateBotLocaleResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object preconditionFailedException;
    public CreateBotLocaleResponse withPreconditionFailedException(Object preconditionFailedException) {
        this.preconditionFailedException = preconditionFailedException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateBotLocaleResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateBotLocaleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateBotLocaleResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateBotLocaleResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}