package openapisdk.models.operations;



public class GetImageRecipePolicyResponse {
    public Object callRateLimitExceededException;
    public GetImageRecipePolicyResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public String contentType;
    public GetImageRecipePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public GetImageRecipePolicyResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public openapisdk.models.shared.GetImageRecipePolicyResponse getImageRecipePolicyResponse;
    public GetImageRecipePolicyResponse withGetImageRecipePolicyResponse(openapisdk.models.shared.GetImageRecipePolicyResponse getImageRecipePolicyResponse) {
        this.getImageRecipePolicyResponse = getImageRecipePolicyResponse;
        return this;
    }
    public Object invalidRequestException;
    public GetImageRecipePolicyResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetImageRecipePolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public GetImageRecipePolicyResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetImageRecipePolicyResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetImageRecipePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}