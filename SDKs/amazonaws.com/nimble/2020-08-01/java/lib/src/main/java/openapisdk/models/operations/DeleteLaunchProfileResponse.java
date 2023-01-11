package openapisdk.models.operations;



public class DeleteLaunchProfileResponse {
    public Object accessDeniedException;
    public DeleteLaunchProfileResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DeleteLaunchProfileResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteLaunchProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteLaunchProfileResponse deleteLaunchProfileResponse;
    public DeleteLaunchProfileResponse withDeleteLaunchProfileResponse(openapisdk.models.shared.DeleteLaunchProfileResponse deleteLaunchProfileResponse) {
        this.deleteLaunchProfileResponse = deleteLaunchProfileResponse;
        return this;
    }
    public Object internalServerErrorException;
    public DeleteLaunchProfileResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteLaunchProfileResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DeleteLaunchProfileResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DeleteLaunchProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteLaunchProfileResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteLaunchProfileResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}