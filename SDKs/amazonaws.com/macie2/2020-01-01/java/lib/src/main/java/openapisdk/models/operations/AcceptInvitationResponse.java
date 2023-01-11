package openapisdk.models.operations;



public class AcceptInvitationResponse {
    public java.util.Map<String, Object> acceptInvitationResponse;
    public AcceptInvitationResponse withAcceptInvitationResponse(java.util.Map<String, Object> acceptInvitationResponse) {
        this.acceptInvitationResponse = acceptInvitationResponse;
        return this;
    }
    public Object accessDeniedException;
    public AcceptInvitationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public AcceptInvitationResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public AcceptInvitationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public AcceptInvitationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public AcceptInvitationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public AcceptInvitationResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public AcceptInvitationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public AcceptInvitationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public AcceptInvitationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}