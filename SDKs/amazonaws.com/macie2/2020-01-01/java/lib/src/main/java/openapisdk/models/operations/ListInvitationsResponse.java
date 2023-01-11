package openapisdk.models.operations;



public class ListInvitationsResponse {
    public Object accessDeniedException;
    public ListInvitationsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public ListInvitationsResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public ListInvitationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListInvitationsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListInvitationsResponse listInvitationsResponse;
    public ListInvitationsResponse withListInvitationsResponse(openapisdk.models.shared.ListInvitationsResponse listInvitationsResponse) {
        this.listInvitationsResponse = listInvitationsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListInvitationsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public ListInvitationsResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public ListInvitationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListInvitationsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListInvitationsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}