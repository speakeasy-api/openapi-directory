package openapisdk.models.operations;



public class ListPendingInvitationResourcesResponse {
    public String contentType;
    public ListPendingInvitationResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListPendingInvitationResourcesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public ListPendingInvitationResourcesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListPendingInvitationResourcesResponse listPendingInvitationResourcesResponse;
    public ListPendingInvitationResourcesResponse withListPendingInvitationResourcesResponse(openapisdk.models.shared.ListPendingInvitationResourcesResponse listPendingInvitationResourcesResponse) {
        this.listPendingInvitationResourcesResponse = listPendingInvitationResourcesResponse;
        return this;
    }
    public Object malformedArnException;
    public ListPendingInvitationResourcesResponse withMalformedArnException(Object malformedArnException) {
        this.malformedArnException = malformedArnException;
        return this;
    }
    public Object missingRequiredParameterException;
    public ListPendingInvitationResourcesResponse withMissingRequiredParameterException(Object missingRequiredParameterException) {
        this.missingRequiredParameterException = missingRequiredParameterException;
        return this;
    }
    public Object resourceShareInvitationAlreadyRejectedException;
    public ListPendingInvitationResourcesResponse withResourceShareInvitationAlreadyRejectedException(Object resourceShareInvitationAlreadyRejectedException) {
        this.resourceShareInvitationAlreadyRejectedException = resourceShareInvitationAlreadyRejectedException;
        return this;
    }
    public Object resourceShareInvitationArnNotFoundException;
    public ListPendingInvitationResourcesResponse withResourceShareInvitationArnNotFoundException(Object resourceShareInvitationArnNotFoundException) {
        this.resourceShareInvitationArnNotFoundException = resourceShareInvitationArnNotFoundException;
        return this;
    }
    public Object resourceShareInvitationExpiredException;
    public ListPendingInvitationResourcesResponse withResourceShareInvitationExpiredException(Object resourceShareInvitationExpiredException) {
        this.resourceShareInvitationExpiredException = resourceShareInvitationExpiredException;
        return this;
    }
    public Object serverInternalException;
    public ListPendingInvitationResourcesResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListPendingInvitationResourcesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListPendingInvitationResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}