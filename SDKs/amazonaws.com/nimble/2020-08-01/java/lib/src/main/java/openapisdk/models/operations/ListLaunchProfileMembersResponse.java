package openapisdk.models.operations;



public class ListLaunchProfileMembersResponse {
    public Object accessDeniedException;
    public ListLaunchProfileMembersResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public ListLaunchProfileMembersResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public ListLaunchProfileMembersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public ListLaunchProfileMembersResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public openapisdk.models.shared.ListLaunchProfileMembersResponse listLaunchProfileMembersResponse;
    public ListLaunchProfileMembersResponse withListLaunchProfileMembersResponse(openapisdk.models.shared.ListLaunchProfileMembersResponse listLaunchProfileMembersResponse) {
        this.listLaunchProfileMembersResponse = listLaunchProfileMembersResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListLaunchProfileMembersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public ListLaunchProfileMembersResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public ListLaunchProfileMembersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListLaunchProfileMembersResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListLaunchProfileMembersResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}