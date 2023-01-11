package openapisdk.models.operations;



public class GetResourceShareInvitationsResponse {
    public String contentType;
    public GetResourceShareInvitationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetResourceShareInvitationsResponse getResourceShareInvitationsResponse;
    public GetResourceShareInvitationsResponse withGetResourceShareInvitationsResponse(openapisdk.models.shared.GetResourceShareInvitationsResponse getResourceShareInvitationsResponse) {
        this.getResourceShareInvitationsResponse = getResourceShareInvitationsResponse;
        return this;
    }
    public Object invalidMaxResultsException;
    public GetResourceShareInvitationsResponse withInvalidMaxResultsException(Object invalidMaxResultsException) {
        this.invalidMaxResultsException = invalidMaxResultsException;
        return this;
    }
    public Object invalidNextTokenException;
    public GetResourceShareInvitationsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public GetResourceShareInvitationsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object malformedArnException;
    public GetResourceShareInvitationsResponse withMalformedArnException(Object malformedArnException) {
        this.malformedArnException = malformedArnException;
        return this;
    }
    public Object resourceShareInvitationArnNotFoundException;
    public GetResourceShareInvitationsResponse withResourceShareInvitationArnNotFoundException(Object resourceShareInvitationArnNotFoundException) {
        this.resourceShareInvitationArnNotFoundException = resourceShareInvitationArnNotFoundException;
        return this;
    }
    public Object serverInternalException;
    public GetResourceShareInvitationsResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetResourceShareInvitationsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetResourceShareInvitationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceException;
    public GetResourceShareInvitationsResponse withUnknownResourceException(Object unknownResourceException) {
        this.unknownResourceException = unknownResourceException;
        return this;
    }
}