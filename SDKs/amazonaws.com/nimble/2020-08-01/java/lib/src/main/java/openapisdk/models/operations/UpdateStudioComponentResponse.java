package openapisdk.models.operations;



public class UpdateStudioComponentResponse {
    public Object accessDeniedException;
    public UpdateStudioComponentResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateStudioComponentResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateStudioComponentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public UpdateStudioComponentResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateStudioComponentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public UpdateStudioComponentResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public UpdateStudioComponentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateStudioComponentResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateStudioComponentResponse updateStudioComponentResponse;
    public UpdateStudioComponentResponse withUpdateStudioComponentResponse(openapisdk.models.shared.UpdateStudioComponentResponse updateStudioComponentResponse) {
        this.updateStudioComponentResponse = updateStudioComponentResponse;
        return this;
    }
    public Object validationException;
    public UpdateStudioComponentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}