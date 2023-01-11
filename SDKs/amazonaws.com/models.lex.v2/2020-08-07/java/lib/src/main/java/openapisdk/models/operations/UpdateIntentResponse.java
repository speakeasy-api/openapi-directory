package openapisdk.models.operations;



public class UpdateIntentResponse {
    public Object conflictException;
    public UpdateIntentResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateIntentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateIntentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object preconditionFailedException;
    public UpdateIntentResponse withPreconditionFailedException(Object preconditionFailedException) {
        this.preconditionFailedException = preconditionFailedException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public UpdateIntentResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public UpdateIntentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateIntentResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateIntentResponse updateIntentResponse;
    public UpdateIntentResponse withUpdateIntentResponse(openapisdk.models.shared.UpdateIntentResponse updateIntentResponse) {
        this.updateIntentResponse = updateIntentResponse;
        return this;
    }
    public Object validationException;
    public UpdateIntentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}