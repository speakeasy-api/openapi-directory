package openapisdk.models.operations;



public class DeclineInvitationsResponse {
    public Object accessDeniedException;
    public DeclineInvitationsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DeclineInvitationsResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeclineInvitationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeclineInvitationsResponse declineInvitationsResponse;
    public DeclineInvitationsResponse withDeclineInvitationsResponse(openapisdk.models.shared.DeclineInvitationsResponse declineInvitationsResponse) {
        this.declineInvitationsResponse = declineInvitationsResponse;
        return this;
    }
    public Object internalServerException;
    public DeclineInvitationsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeclineInvitationsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DeclineInvitationsResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DeclineInvitationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeclineInvitationsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeclineInvitationsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}