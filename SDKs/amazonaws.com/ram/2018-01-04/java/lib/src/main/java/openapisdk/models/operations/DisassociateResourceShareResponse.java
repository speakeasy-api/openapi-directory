package openapisdk.models.operations;



public class DisassociateResourceShareResponse {
    public String contentType;
    public DisassociateResourceShareResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DisassociateResourceShareResponse disassociateResourceShareResponse;
    public DisassociateResourceShareResponse withDisassociateResourceShareResponse(openapisdk.models.shared.DisassociateResourceShareResponse disassociateResourceShareResponse) {
        this.disassociateResourceShareResponse = disassociateResourceShareResponse;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public DisassociateResourceShareResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object invalidClientTokenException;
    public DisassociateResourceShareResponse withInvalidClientTokenException(Object invalidClientTokenException) {
        this.invalidClientTokenException = invalidClientTokenException;
        return this;
    }
    public Object invalidParameterException;
    public DisassociateResourceShareResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidStateTransitionException;
    public DisassociateResourceShareResponse withInvalidStateTransitionException(Object invalidStateTransitionException) {
        this.invalidStateTransitionException = invalidStateTransitionException;
        return this;
    }
    public Object malformedArnException;
    public DisassociateResourceShareResponse withMalformedArnException(Object malformedArnException) {
        this.malformedArnException = malformedArnException;
        return this;
    }
    public Object operationNotPermittedException;
    public DisassociateResourceShareResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object resourceShareLimitExceededException;
    public DisassociateResourceShareResponse withResourceShareLimitExceededException(Object resourceShareLimitExceededException) {
        this.resourceShareLimitExceededException = resourceShareLimitExceededException;
        return this;
    }
    public Object serverInternalException;
    public DisassociateResourceShareResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Object serviceUnavailableException;
    public DisassociateResourceShareResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DisassociateResourceShareResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceException;
    public DisassociateResourceShareResponse withUnknownResourceException(Object unknownResourceException) {
        this.unknownResourceException = unknownResourceException;
        return this;
    }
}