package openapisdk.models.operations;



public class AcceptResourceShareInvitationResponse {
    public openapisdk.models.shared.AcceptResourceShareInvitationResponse acceptResourceShareInvitationResponse;
    public AcceptResourceShareInvitationResponse withAcceptResourceShareInvitationResponse(openapisdk.models.shared.AcceptResourceShareInvitationResponse acceptResourceShareInvitationResponse) {
        this.acceptResourceShareInvitationResponse = acceptResourceShareInvitationResponse;
        return this;
    }
    public String contentType;
    public AcceptResourceShareInvitationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public AcceptResourceShareInvitationResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object invalidClientTokenException;
    public AcceptResourceShareInvitationResponse withInvalidClientTokenException(Object invalidClientTokenException) {
        this.invalidClientTokenException = invalidClientTokenException;
        return this;
    }
    public Object malformedArnException;
    public AcceptResourceShareInvitationResponse withMalformedArnException(Object malformedArnException) {
        this.malformedArnException = malformedArnException;
        return this;
    }
    public Object operationNotPermittedException;
    public AcceptResourceShareInvitationResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object resourceShareInvitationAlreadyAcceptedException;
    public AcceptResourceShareInvitationResponse withResourceShareInvitationAlreadyAcceptedException(Object resourceShareInvitationAlreadyAcceptedException) {
        this.resourceShareInvitationAlreadyAcceptedException = resourceShareInvitationAlreadyAcceptedException;
        return this;
    }
    public Object resourceShareInvitationAlreadyRejectedException;
    public AcceptResourceShareInvitationResponse withResourceShareInvitationAlreadyRejectedException(Object resourceShareInvitationAlreadyRejectedException) {
        this.resourceShareInvitationAlreadyRejectedException = resourceShareInvitationAlreadyRejectedException;
        return this;
    }
    public Object resourceShareInvitationArnNotFoundException;
    public AcceptResourceShareInvitationResponse withResourceShareInvitationArnNotFoundException(Object resourceShareInvitationArnNotFoundException) {
        this.resourceShareInvitationArnNotFoundException = resourceShareInvitationArnNotFoundException;
        return this;
    }
    public Object resourceShareInvitationExpiredException;
    public AcceptResourceShareInvitationResponse withResourceShareInvitationExpiredException(Object resourceShareInvitationExpiredException) {
        this.resourceShareInvitationExpiredException = resourceShareInvitationExpiredException;
        return this;
    }
    public Object serverInternalException;
    public AcceptResourceShareInvitationResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Object serviceUnavailableException;
    public AcceptResourceShareInvitationResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public AcceptResourceShareInvitationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}