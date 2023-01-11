package openapisdk.models.operations;



public class UpdateSlotTypeResponse {
    public Object conflictException;
    public UpdateSlotTypeResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateSlotTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateSlotTypeResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object preconditionFailedException;
    public UpdateSlotTypeResponse withPreconditionFailedException(Object preconditionFailedException) {
        this.preconditionFailedException = preconditionFailedException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public UpdateSlotTypeResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public UpdateSlotTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateSlotTypeResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateSlotTypeResponse updateSlotTypeResponse;
    public UpdateSlotTypeResponse withUpdateSlotTypeResponse(openapisdk.models.shared.UpdateSlotTypeResponse updateSlotTypeResponse) {
        this.updateSlotTypeResponse = updateSlotTypeResponse;
        return this;
    }
    public Object validationException;
    public UpdateSlotTypeResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}