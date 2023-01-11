package openapisdk.models.operations;



public class PutLaunchProfileMembersResponse {
    public Object accessDeniedException;
    public PutLaunchProfileMembersResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public PutLaunchProfileMembersResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public PutLaunchProfileMembersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public PutLaunchProfileMembersResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public java.util.Map<String, Object> putLaunchProfileMembersResponse;
    public PutLaunchProfileMembersResponse withPutLaunchProfileMembersResponse(java.util.Map<String, Object> putLaunchProfileMembersResponse) {
        this.putLaunchProfileMembersResponse = putLaunchProfileMembersResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public PutLaunchProfileMembersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public PutLaunchProfileMembersResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public PutLaunchProfileMembersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public PutLaunchProfileMembersResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public PutLaunchProfileMembersResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}