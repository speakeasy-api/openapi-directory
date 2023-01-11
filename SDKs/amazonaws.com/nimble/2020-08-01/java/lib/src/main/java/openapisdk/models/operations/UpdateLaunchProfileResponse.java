package openapisdk.models.operations;



public class UpdateLaunchProfileResponse {
    public Object accessDeniedException;
    public UpdateLaunchProfileResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateLaunchProfileResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateLaunchProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public UpdateLaunchProfileResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateLaunchProfileResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public UpdateLaunchProfileResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public UpdateLaunchProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateLaunchProfileResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateLaunchProfileResponse updateLaunchProfileResponse;
    public UpdateLaunchProfileResponse withUpdateLaunchProfileResponse(openapisdk.models.shared.UpdateLaunchProfileResponse updateLaunchProfileResponse) {
        this.updateLaunchProfileResponse = updateLaunchProfileResponse;
        return this;
    }
    public Object validationException;
    public UpdateLaunchProfileResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}