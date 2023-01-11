package openapisdk.models.operations;



public class GetInvitationsCountResponse {
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
    public Object internalException;
    public GetInvitationsCountResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public GetInvitationsCountResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public GetInvitationsCountResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public GetInvitationsCountResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public GetInvitationsCountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}