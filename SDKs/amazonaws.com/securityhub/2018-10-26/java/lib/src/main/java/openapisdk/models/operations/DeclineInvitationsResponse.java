package openapisdk.models.operations;



public class DeclineInvitationsResponse {
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
    public Object internalException;
    public DeclineInvitationsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public DeclineInvitationsResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public DeclineInvitationsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeclineInvitationsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeclineInvitationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}