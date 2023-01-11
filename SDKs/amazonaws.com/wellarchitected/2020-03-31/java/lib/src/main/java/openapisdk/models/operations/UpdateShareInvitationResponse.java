package openapisdk.models.operations;



public class UpdateShareInvitationResponse {
    public Object accessDeniedException;
    public UpdateShareInvitationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateShareInvitationResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateShareInvitationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateShareInvitationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateShareInvitationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateShareInvitationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateShareInvitationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateShareInvitationOutput updateShareInvitationOutput;
    public UpdateShareInvitationResponse withUpdateShareInvitationOutput(openapisdk.models.shared.UpdateShareInvitationOutput updateShareInvitationOutput) {
        this.updateShareInvitationOutput = updateShareInvitationOutput;
        return this;
    }
    public Object validationException;
    public UpdateShareInvitationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}