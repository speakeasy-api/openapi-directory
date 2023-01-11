package openapisdk.models.operations;



public class CreateLaunchProfileResponse {
    public Object accessDeniedException;
    public CreateLaunchProfileResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateLaunchProfileResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateLaunchProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateLaunchProfileResponse createLaunchProfileResponse;
    public CreateLaunchProfileResponse withCreateLaunchProfileResponse(openapisdk.models.shared.CreateLaunchProfileResponse createLaunchProfileResponse) {
        this.createLaunchProfileResponse = createLaunchProfileResponse;
        return this;
    }
    public Object internalServerErrorException;
    public CreateLaunchProfileResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateLaunchProfileResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateLaunchProfileResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateLaunchProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateLaunchProfileResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateLaunchProfileResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}