package openapisdk.models.operations;



public class DeleteAccountAssignmentResponse {
    public Object accessDeniedException;
    public DeleteAccountAssignmentResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DeleteAccountAssignmentResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteAccountAssignmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteAccountAssignmentResponse deleteAccountAssignmentResponse;
    public DeleteAccountAssignmentResponse withDeleteAccountAssignmentResponse(openapisdk.models.shared.DeleteAccountAssignmentResponse deleteAccountAssignmentResponse) {
        this.deleteAccountAssignmentResponse = deleteAccountAssignmentResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteAccountAssignmentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteAccountAssignmentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteAccountAssignmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteAccountAssignmentResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteAccountAssignmentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}