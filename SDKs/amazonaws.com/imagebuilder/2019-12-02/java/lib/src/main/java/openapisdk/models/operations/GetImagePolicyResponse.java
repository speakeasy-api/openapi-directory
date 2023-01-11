package openapisdk.models.operations;



public class GetImagePolicyResponse {
    public Object callRateLimitExceededException;
    public GetImagePolicyResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public String contentType;
    public GetImagePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public GetImagePolicyResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public openapisdk.models.shared.GetImagePolicyResponse getImagePolicyResponse;
    public GetImagePolicyResponse withGetImagePolicyResponse(openapisdk.models.shared.GetImagePolicyResponse getImagePolicyResponse) {
        this.getImagePolicyResponse = getImagePolicyResponse;
        return this;
    }
    public Object invalidRequestException;
    public GetImagePolicyResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetImagePolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public GetImagePolicyResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetImagePolicyResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetImagePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}