package openapisdk.models.operations;



public class GetLaunchProfileMemberResponse {
    public Object accessDeniedException;
    public GetLaunchProfileMemberResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public GetLaunchProfileMemberResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public GetLaunchProfileMemberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLaunchProfileMemberResponse getLaunchProfileMemberResponse;
    public GetLaunchProfileMemberResponse withGetLaunchProfileMemberResponse(openapisdk.models.shared.GetLaunchProfileMemberResponse getLaunchProfileMemberResponse) {
        this.getLaunchProfileMemberResponse = getLaunchProfileMemberResponse;
        return this;
    }
    public Object internalServerErrorException;
    public GetLaunchProfileMemberResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetLaunchProfileMemberResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public GetLaunchProfileMemberResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public GetLaunchProfileMemberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetLaunchProfileMemberResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetLaunchProfileMemberResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}