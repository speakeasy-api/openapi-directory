package openapisdk.models.operations;



public class GetLaunchProfileDetailsResponse {
    public Object accessDeniedException;
    public GetLaunchProfileDetailsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public GetLaunchProfileDetailsResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public GetLaunchProfileDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLaunchProfileDetailsResponse getLaunchProfileDetailsResponse;
    public GetLaunchProfileDetailsResponse withGetLaunchProfileDetailsResponse(openapisdk.models.shared.GetLaunchProfileDetailsResponse getLaunchProfileDetailsResponse) {
        this.getLaunchProfileDetailsResponse = getLaunchProfileDetailsResponse;
        return this;
    }
    public Object internalServerErrorException;
    public GetLaunchProfileDetailsResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetLaunchProfileDetailsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public GetLaunchProfileDetailsResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public GetLaunchProfileDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetLaunchProfileDetailsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetLaunchProfileDetailsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}