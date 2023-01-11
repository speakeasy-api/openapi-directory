package openapisdk.models.operations;



public class GetLaunchProfileResponse {
    public Object accessDeniedException;
    public GetLaunchProfileResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public GetLaunchProfileResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public GetLaunchProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLaunchProfileResponse getLaunchProfileResponse;
    public GetLaunchProfileResponse withGetLaunchProfileResponse(openapisdk.models.shared.GetLaunchProfileResponse getLaunchProfileResponse) {
        this.getLaunchProfileResponse = getLaunchProfileResponse;
        return this;
    }
    public Object internalServerErrorException;
    public GetLaunchProfileResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetLaunchProfileResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public GetLaunchProfileResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public GetLaunchProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetLaunchProfileResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetLaunchProfileResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}