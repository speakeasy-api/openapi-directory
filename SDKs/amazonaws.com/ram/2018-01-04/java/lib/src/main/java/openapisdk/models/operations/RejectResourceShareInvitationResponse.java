package openapisdk.models.operations;



public class RejectResourceShareInvitationResponse {
    public String contentType;
    public RejectResourceShareInvitationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public RejectResourceShareInvitationResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object invalidClientTokenException;
    public RejectResourceShareInvitationResponse withInvalidClientTokenException(Object invalidClientTokenException) {
        this.invalidClientTokenException = invalidClientTokenException;
        return this;
    }
    public Object malformedArnException;
    public RejectResourceShareInvitationResponse withMalformedArnException(Object malformedArnException) {
        this.malformedArnException = malformedArnException;
        return this;
    }
    public Object operationNotPermittedException;
    public RejectResourceShareInvitationResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public openapisdk.models.shared.RejectResourceShareInvitationResponse rejectResourceShareInvitationResponse;
    public RejectResourceShareInvitationResponse withRejectResourceShareInvitationResponse(openapisdk.models.shared.RejectResourceShareInvitationResponse rejectResourceShareInvitationResponse) {
        this.rejectResourceShareInvitationResponse = rejectResourceShareInvitationResponse;
        return this;
    }
    public Object resourceShareInvitationAlreadyAcceptedException;
    public RejectResourceShareInvitationResponse withResourceShareInvitationAlreadyAcceptedException(Object resourceShareInvitationAlreadyAcceptedException) {
        this.resourceShareInvitationAlreadyAcceptedException = resourceShareInvitationAlreadyAcceptedException;
        return this;
    }
    public Object resourceShareInvitationAlreadyRejectedException;
    public RejectResourceShareInvitationResponse withResourceShareInvitationAlreadyRejectedException(Object resourceShareInvitationAlreadyRejectedException) {
        this.resourceShareInvitationAlreadyRejectedException = resourceShareInvitationAlreadyRejectedException;
        return this;
    }
    public Object resourceShareInvitationArnNotFoundException;
    public RejectResourceShareInvitationResponse withResourceShareInvitationArnNotFoundException(Object resourceShareInvitationArnNotFoundException) {
        this.resourceShareInvitationArnNotFoundException = resourceShareInvitationArnNotFoundException;
        return this;
    }
    public Object resourceShareInvitationExpiredException;
    public RejectResourceShareInvitationResponse withResourceShareInvitationExpiredException(Object resourceShareInvitationExpiredException) {
        this.resourceShareInvitationExpiredException = resourceShareInvitationExpiredException;
        return this;
    }
    public Object serverInternalException;
    public RejectResourceShareInvitationResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Object serviceUnavailableException;
    public RejectResourceShareInvitationResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public RejectResourceShareInvitationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}