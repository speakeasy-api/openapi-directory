package openapisdk.models.operations;



public class UpdateLaunchProfileMemberResponse {
    public Object accessDeniedException;
    public UpdateLaunchProfileMemberResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateLaunchProfileMemberResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateLaunchProfileMemberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public UpdateLaunchProfileMemberResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateLaunchProfileMemberResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public UpdateLaunchProfileMemberResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public UpdateLaunchProfileMemberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateLaunchProfileMemberResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateLaunchProfileMemberResponse updateLaunchProfileMemberResponse;
    public UpdateLaunchProfileMemberResponse withUpdateLaunchProfileMemberResponse(openapisdk.models.shared.UpdateLaunchProfileMemberResponse updateLaunchProfileMemberResponse) {
        this.updateLaunchProfileMemberResponse = updateLaunchProfileMemberResponse;
        return this;
    }
    public Object validationException;
    public UpdateLaunchProfileMemberResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}