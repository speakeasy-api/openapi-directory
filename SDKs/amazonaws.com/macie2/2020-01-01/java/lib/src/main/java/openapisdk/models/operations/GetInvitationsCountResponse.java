package openapisdk.models.operations;



public class GetInvitationsCountResponse {
    public Object accessDeniedException;
    public GetInvitationsCountResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public GetInvitationsCountResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public GetInvitationsCountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetInvitationsCountResponse getInvitationsCountResponse;
    public GetInvitationsCountResponse withGetInvitationsCountResponse(openapisdk.models.shared.GetInvitationsCountResponse getInvitationsCountResponse) {
        this.getInvitationsCountResponse = getInvitationsCountResponse;
        return this;
    }
    public Object internalServerException;
    public GetInvitationsCountResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetInvitationsCountResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public GetInvitationsCountResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public GetInvitationsCountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetInvitationsCountResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetInvitationsCountResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}