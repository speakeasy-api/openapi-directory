package openapisdk.models.operations;



public class GetImageResponse {
    public Object callRateLimitExceededException;
    public GetImageResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public GetImageResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public GetImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public GetImageResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public openapisdk.models.shared.GetImageResponse getImageResponse;
    public GetImageResponse withGetImageResponse(openapisdk.models.shared.GetImageResponse getImageResponse) {
        this.getImageResponse = getImageResponse;
        return this;
    }
    public Object invalidRequestException;
    public GetImageResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceException;
    public GetImageResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetImageResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}