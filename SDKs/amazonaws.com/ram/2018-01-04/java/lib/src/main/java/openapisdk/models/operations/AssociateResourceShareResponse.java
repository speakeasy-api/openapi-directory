package openapisdk.models.operations;



public class AssociateResourceShareResponse {
    public openapisdk.models.shared.AssociateResourceShareResponse associateResourceShareResponse;
    public AssociateResourceShareResponse withAssociateResourceShareResponse(openapisdk.models.shared.AssociateResourceShareResponse associateResourceShareResponse) {
        this.associateResourceShareResponse = associateResourceShareResponse;
        return this;
    }
    public String contentType;
    public AssociateResourceShareResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public AssociateResourceShareResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object invalidClientTokenException;
    public AssociateResourceShareResponse withInvalidClientTokenException(Object invalidClientTokenException) {
        this.invalidClientTokenException = invalidClientTokenException;
        return this;
    }
    public Object invalidParameterException;
    public AssociateResourceShareResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidStateTransitionException;
    public AssociateResourceShareResponse withInvalidStateTransitionException(Object invalidStateTransitionException) {
        this.invalidStateTransitionException = invalidStateTransitionException;
        return this;
    }
    public Object malformedArnException;
    public AssociateResourceShareResponse withMalformedArnException(Object malformedArnException) {
        this.malformedArnException = malformedArnException;
        return this;
    }
    public Object operationNotPermittedException;
    public AssociateResourceShareResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object resourceShareLimitExceededException;
    public AssociateResourceShareResponse withResourceShareLimitExceededException(Object resourceShareLimitExceededException) {
        this.resourceShareLimitExceededException = resourceShareLimitExceededException;
        return this;
    }
    public Object serverInternalException;
    public AssociateResourceShareResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Object serviceUnavailableException;
    public AssociateResourceShareResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public AssociateResourceShareResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceException;
    public AssociateResourceShareResponse withUnknownResourceException(Object unknownResourceException) {
        this.unknownResourceException = unknownResourceException;
        return this;
    }
}