package openapisdk.models.operations;



public class CreateResourceShareResponse {
    public String contentType;
    public CreateResourceShareResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateResourceShareResponse createResourceShareResponse;
    public CreateResourceShareResponse withCreateResourceShareResponse(openapisdk.models.shared.CreateResourceShareResponse createResourceShareResponse) {
        this.createResourceShareResponse = createResourceShareResponse;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public CreateResourceShareResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object invalidClientTokenException;
    public CreateResourceShareResponse withInvalidClientTokenException(Object invalidClientTokenException) {
        this.invalidClientTokenException = invalidClientTokenException;
        return this;
    }
    public Object invalidParameterException;
    public CreateResourceShareResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidStateTransitionException;
    public CreateResourceShareResponse withInvalidStateTransitionException(Object invalidStateTransitionException) {
        this.invalidStateTransitionException = invalidStateTransitionException;
        return this;
    }
    public Object malformedArnException;
    public CreateResourceShareResponse withMalformedArnException(Object malformedArnException) {
        this.malformedArnException = malformedArnException;
        return this;
    }
    public Object operationNotPermittedException;
    public CreateResourceShareResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object resourceShareLimitExceededException;
    public CreateResourceShareResponse withResourceShareLimitExceededException(Object resourceShareLimitExceededException) {
        this.resourceShareLimitExceededException = resourceShareLimitExceededException;
        return this;
    }
    public Object serverInternalException;
    public CreateResourceShareResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Object serviceUnavailableException;
    public CreateResourceShareResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CreateResourceShareResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagPolicyViolationException;
    public CreateResourceShareResponse withTagPolicyViolationException(Object tagPolicyViolationException) {
        this.tagPolicyViolationException = tagPolicyViolationException;
        return this;
    }
    public Object unknownResourceException;
    public CreateResourceShareResponse withUnknownResourceException(Object unknownResourceException) {
        this.unknownResourceException = unknownResourceException;
        return this;
    }
}