package openapisdk.models.operations;



public class DeleteInvitationsResponse {
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
    public Object internalException;
    public DeleteInvitationsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public DeleteInvitationsResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public DeleteInvitationsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public DeleteInvitationsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteInvitationsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteInvitationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}