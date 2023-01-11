package openapisdk.models.operations;



public class DeleteInvitationsResponse {
    public Object accessDeniedException;
    public DeleteInvitationsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DeleteInvitationsResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteInvitationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteInvitationsResponse deleteInvitationsResponse;
    public DeleteInvitationsResponse withDeleteInvitationsResponse(openapisdk.models.shared.DeleteInvitationsResponse deleteInvitationsResponse) {
        this.deleteInvitationsResponse = deleteInvitationsResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteInvitationsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteInvitationsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DeleteInvitationsResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DeleteInvitationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteInvitationsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteInvitationsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}