package openapisdk.models.operations;



public class ListMembersResponse {
    public Object accessDeniedException;
    public ListMembersResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public ListMembersResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public ListMembersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListMembersResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListMembersResponse listMembersResponse;
    public ListMembersResponse withListMembersResponse(openapisdk.models.shared.ListMembersResponse listMembersResponse) {
        this.listMembersResponse = listMembersResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListMembersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public ListMembersResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public ListMembersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListMembersResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListMembersResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}