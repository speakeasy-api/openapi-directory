package openapisdk.models.operations;



public class GetContainerRecipePolicyResponse {
    public Object callRateLimitExceededException;
    public GetContainerRecipePolicyResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public String contentType;
    public GetContainerRecipePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public GetContainerRecipePolicyResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public openapisdk.models.shared.GetContainerRecipePolicyResponse getContainerRecipePolicyResponse;
    public GetContainerRecipePolicyResponse withGetContainerRecipePolicyResponse(openapisdk.models.shared.GetContainerRecipePolicyResponse getContainerRecipePolicyResponse) {
        this.getContainerRecipePolicyResponse = getContainerRecipePolicyResponse;
        return this;
    }
    public Object invalidRequestException;
    public GetContainerRecipePolicyResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetContainerRecipePolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public GetContainerRecipePolicyResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetContainerRecipePolicyResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetContainerRecipePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}