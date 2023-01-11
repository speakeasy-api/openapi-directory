package openapisdk.models.operations;



public class GetComponentPolicyResponse {
    public Object callRateLimitExceededException;
    public GetComponentPolicyResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public String contentType;
    public GetComponentPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public GetComponentPolicyResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public openapisdk.models.shared.GetComponentPolicyResponse getComponentPolicyResponse;
    public GetComponentPolicyResponse withGetComponentPolicyResponse(openapisdk.models.shared.GetComponentPolicyResponse getComponentPolicyResponse) {
        this.getComponentPolicyResponse = getComponentPolicyResponse;
        return this;
    }
    public Object invalidRequestException;
    public GetComponentPolicyResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetComponentPolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public GetComponentPolicyResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetComponentPolicyResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetComponentPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}