package openapisdk.models.operations;



public class UpdateSlotResponse {
    public Object conflictException;
    public UpdateSlotResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateSlotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateSlotResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object preconditionFailedException;
    public UpdateSlotResponse withPreconditionFailedException(Object preconditionFailedException) {
        this.preconditionFailedException = preconditionFailedException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public UpdateSlotResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public UpdateSlotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateSlotResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateSlotResponse updateSlotResponse;
    public UpdateSlotResponse withUpdateSlotResponse(openapisdk.models.shared.UpdateSlotResponse updateSlotResponse) {
        this.updateSlotResponse = updateSlotResponse;
        return this;
    }
    public Object validationException;
    public UpdateSlotResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}