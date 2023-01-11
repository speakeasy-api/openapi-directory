package openapisdk.models.operations;



public class GetLaunchProfileInitializationResponse {
    public Object accessDeniedException;
    public GetLaunchProfileInitializationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public GetLaunchProfileInitializationResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public GetLaunchProfileInitializationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLaunchProfileInitializationResponse getLaunchProfileInitializationResponse;
    public GetLaunchProfileInitializationResponse withGetLaunchProfileInitializationResponse(openapisdk.models.shared.GetLaunchProfileInitializationResponse getLaunchProfileInitializationResponse) {
        this.getLaunchProfileInitializationResponse = getLaunchProfileInitializationResponse;
        return this;
    }
    public Object internalServerErrorException;
    public GetLaunchProfileInitializationResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetLaunchProfileInitializationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public GetLaunchProfileInitializationResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public GetLaunchProfileInitializationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetLaunchProfileInitializationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetLaunchProfileInitializationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}