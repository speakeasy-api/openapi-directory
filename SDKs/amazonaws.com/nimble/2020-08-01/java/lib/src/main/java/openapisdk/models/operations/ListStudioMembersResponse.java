package openapisdk.models.operations;



public class ListStudioMembersResponse {
    public Object accessDeniedException;
    public ListStudioMembersResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public ListStudioMembersResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public ListStudioMembersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public ListStudioMembersResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public openapisdk.models.shared.ListStudioMembersResponse listStudioMembersResponse;
    public ListStudioMembersResponse withListStudioMembersResponse(openapisdk.models.shared.ListStudioMembersResponse listStudioMembersResponse) {
        this.listStudioMembersResponse = listStudioMembersResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListStudioMembersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public ListStudioMembersResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public ListStudioMembersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListStudioMembersResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListStudioMembersResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}