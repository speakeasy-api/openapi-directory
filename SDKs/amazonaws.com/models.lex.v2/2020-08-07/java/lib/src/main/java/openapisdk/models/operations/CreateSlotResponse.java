package openapisdk.models.operations;



public class CreateSlotResponse {
    public Object conflictException;
    public CreateSlotResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateSlotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateSlotResponse createSlotResponse;
    public CreateSlotResponse withCreateSlotResponse(openapisdk.models.shared.CreateSlotResponse createSlotResponse) {
        this.createSlotResponse = createSlotResponse;
        return this;
    }
    public Object internalServerException;
    public CreateSlotResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object preconditionFailedException;
    public CreateSlotResponse withPreconditionFailedException(Object preconditionFailedException) {
        this.preconditionFailedException = preconditionFailedException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateSlotResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateSlotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateSlotResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateSlotResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}