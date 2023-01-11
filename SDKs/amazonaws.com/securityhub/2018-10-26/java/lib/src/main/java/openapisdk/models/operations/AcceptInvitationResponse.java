package openapisdk.models.operations;



public class AcceptInvitationResponse {
    public java.util.Map<String, Object> acceptInvitationResponse;
    public AcceptInvitationResponse withAcceptInvitationResponse(java.util.Map<String, Object> acceptInvitationResponse) {
        this.acceptInvitationResponse = acceptInvitationResponse;
        return this;
    }
    public String contentType;
    public AcceptInvitationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public AcceptInvitationResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public AcceptInvitationResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public AcceptInvitationResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public AcceptInvitationResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public AcceptInvitationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AcceptInvitationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}