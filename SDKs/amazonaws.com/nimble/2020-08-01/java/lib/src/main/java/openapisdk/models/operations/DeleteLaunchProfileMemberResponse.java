package openapisdk.models.operations;



public class DeleteLaunchProfileMemberResponse {
    public Object accessDeniedException;
    public DeleteLaunchProfileMemberResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DeleteLaunchProfileMemberResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteLaunchProfileMemberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteLaunchProfileMemberResponse;
    public DeleteLaunchProfileMemberResponse withDeleteLaunchProfileMemberResponse(java.util.Map<String, Object> deleteLaunchProfileMemberResponse) {
        this.deleteLaunchProfileMemberResponse = deleteLaunchProfileMemberResponse;
        return this;
    }
    public Object internalServerErrorException;
    public DeleteLaunchProfileMemberResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteLaunchProfileMemberResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DeleteLaunchProfileMemberResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DeleteLaunchProfileMemberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteLaunchProfileMemberResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteLaunchProfileMemberResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}