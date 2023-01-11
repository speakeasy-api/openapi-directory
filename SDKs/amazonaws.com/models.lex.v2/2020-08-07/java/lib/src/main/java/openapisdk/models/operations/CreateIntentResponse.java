package openapisdk.models.operations;



public class CreateIntentResponse {
    public Object conflictException;
    public CreateIntentResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateIntentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateIntentResponse createIntentResponse;
    public CreateIntentResponse withCreateIntentResponse(openapisdk.models.shared.CreateIntentResponse createIntentResponse) {
        this.createIntentResponse = createIntentResponse;
        return this;
    }
    public Object internalServerException;
    public CreateIntentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object preconditionFailedException;
    public CreateIntentResponse withPreconditionFailedException(Object preconditionFailedException) {
        this.preconditionFailedException = preconditionFailedException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateIntentResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateIntentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateIntentResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateIntentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}