package openapisdk.models.operations;



public class PromoteResourceShareCreatedFromPolicyResponse {
    public String contentType;
    public PromoteResourceShareCreatedFromPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public PromoteResourceShareCreatedFromPolicyResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object malformedArnException;
    public PromoteResourceShareCreatedFromPolicyResponse withMalformedArnException(Object malformedArnException) {
        this.malformedArnException = malformedArnException;
        return this;
    }
    public Object missingRequiredParameterException;
    public PromoteResourceShareCreatedFromPolicyResponse withMissingRequiredParameterException(Object missingRequiredParameterException) {
        this.missingRequiredParameterException = missingRequiredParameterException;
        return this;
    }
    public Object operationNotPermittedException;
    public PromoteResourceShareCreatedFromPolicyResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public openapisdk.models.shared.PromoteResourceShareCreatedFromPolicyResponse promoteResourceShareCreatedFromPolicyResponse;
    public PromoteResourceShareCreatedFromPolicyResponse withPromoteResourceShareCreatedFromPolicyResponse(openapisdk.models.shared.PromoteResourceShareCreatedFromPolicyResponse promoteResourceShareCreatedFromPolicyResponse) {
        this.promoteResourceShareCreatedFromPolicyResponse = promoteResourceShareCreatedFromPolicyResponse;
        return this;
    }
    public Object resourceShareLimitExceededException;
    public PromoteResourceShareCreatedFromPolicyResponse withResourceShareLimitExceededException(Object resourceShareLimitExceededException) {
        this.resourceShareLimitExceededException = resourceShareLimitExceededException;
        return this;
    }
    public Object serverInternalException;
    public PromoteResourceShareCreatedFromPolicyResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Object serviceUnavailableException;
    public PromoteResourceShareCreatedFromPolicyResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public PromoteResourceShareCreatedFromPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceException;
    public PromoteResourceShareCreatedFromPolicyResponse withUnknownResourceException(Object unknownResourceException) {
        this.unknownResourceException = unknownResourceException;
        return this;
    }
}