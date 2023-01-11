package openapisdk.models.operations;



public class CreateSlotTypeResponse {
    public Object conflictException;
    public CreateSlotTypeResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateSlotTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateSlotTypeResponse createSlotTypeResponse;
    public CreateSlotTypeResponse withCreateSlotTypeResponse(openapisdk.models.shared.CreateSlotTypeResponse createSlotTypeResponse) {
        this.createSlotTypeResponse = createSlotTypeResponse;
        return this;
    }
    public Object internalServerException;
    public CreateSlotTypeResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object preconditionFailedException;
    public CreateSlotTypeResponse withPreconditionFailedException(Object preconditionFailedException) {
        this.preconditionFailedException = preconditionFailedException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateSlotTypeResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateSlotTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateSlotTypeResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateSlotTypeResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}