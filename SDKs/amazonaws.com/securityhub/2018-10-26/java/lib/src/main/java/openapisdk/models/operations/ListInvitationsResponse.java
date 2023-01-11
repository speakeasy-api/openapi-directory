package openapisdk.models.operations;



public class ListInvitationsResponse {
    public String contentType;
    public ListInvitationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ListInvitationsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public ListInvitationsResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public ListInvitationsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public ListInvitationsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListInvitationsResponse listInvitationsResponse;
    public ListInvitationsResponse withListInvitationsResponse(openapisdk.models.shared.ListInvitationsResponse listInvitationsResponse) {
        this.listInvitationsResponse = listInvitationsResponse;
        return this;
    }
    public Long statusCode;
    public ListInvitationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}