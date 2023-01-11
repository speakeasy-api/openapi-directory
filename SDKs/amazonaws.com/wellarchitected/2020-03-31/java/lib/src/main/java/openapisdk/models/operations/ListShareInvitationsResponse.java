package openapisdk.models.operations;



public class ListShareInvitationsResponse {
    public Object accessDeniedException;
    public ListShareInvitationsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListShareInvitationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListShareInvitationsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListShareInvitationsOutput listShareInvitationsOutput;
    public ListShareInvitationsResponse withListShareInvitationsOutput(openapisdk.models.shared.ListShareInvitationsOutput listShareInvitationsOutput) {
        this.listShareInvitationsOutput = listShareInvitationsOutput;
        return this;
    }
    public Long statusCode;
    public ListShareInvitationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListShareInvitationsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListShareInvitationsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}