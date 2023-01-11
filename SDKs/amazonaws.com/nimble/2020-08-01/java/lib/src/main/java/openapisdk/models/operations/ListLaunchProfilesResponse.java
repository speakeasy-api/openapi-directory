package openapisdk.models.operations;



public class ListLaunchProfilesResponse {
    public Object accessDeniedException;
    public ListLaunchProfilesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public ListLaunchProfilesResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public ListLaunchProfilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public ListLaunchProfilesResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public openapisdk.models.shared.ListLaunchProfilesResponse listLaunchProfilesResponse;
    public ListLaunchProfilesResponse withListLaunchProfilesResponse(openapisdk.models.shared.ListLaunchProfilesResponse listLaunchProfilesResponse) {
        this.listLaunchProfilesResponse = listLaunchProfilesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListLaunchProfilesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public ListLaunchProfilesResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public ListLaunchProfilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListLaunchProfilesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListLaunchProfilesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}