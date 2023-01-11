package openapisdk.models.operations;



public class GetEffectivePoliciesResponse {
    public String contentType;
    public GetEffectivePoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEffectivePoliciesResponse getEffectivePoliciesResponse;
    public GetEffectivePoliciesResponse withGetEffectivePoliciesResponse(openapisdk.models.shared.GetEffectivePoliciesResponse getEffectivePoliciesResponse) {
        this.getEffectivePoliciesResponse = getEffectivePoliciesResponse;
        return this;
    }
    public Object internalFailureException;
    public GetEffectivePoliciesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public GetEffectivePoliciesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public GetEffectivePoliciesResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetEffectivePoliciesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetEffectivePoliciesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetEffectivePoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetEffectivePoliciesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public GetEffectivePoliciesResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}