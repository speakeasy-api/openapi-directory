package openapisdk.models.operations;



public class AcceptAdministratorInvitationResponse {
    public java.util.Map<String, Object> acceptAdministratorInvitationResponse;
    public AcceptAdministratorInvitationResponse withAcceptAdministratorInvitationResponse(java.util.Map<String, Object> acceptAdministratorInvitationResponse) {
        this.acceptAdministratorInvitationResponse = acceptAdministratorInvitationResponse;
        return this;
    }
    public String contentType;
    public AcceptAdministratorInvitationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public AcceptAdministratorInvitationResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public AcceptAdministratorInvitationResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public AcceptAdministratorInvitationResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public AcceptAdministratorInvitationResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public AcceptAdministratorInvitationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AcceptAdministratorInvitationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}