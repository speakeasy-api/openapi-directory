package openapisdk.models.operations;



public class GetComponentResponse {
    public Object callRateLimitExceededException;
    public GetComponentResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public GetComponentResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public GetComponentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public GetComponentResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public openapisdk.models.shared.GetComponentResponse getComponentResponse;
    public GetComponentResponse withGetComponentResponse(openapisdk.models.shared.GetComponentResponse getComponentResponse) {
        this.getComponentResponse = getComponentResponse;
        return this;
    }
    public Object invalidRequestException;
    public GetComponentResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceException;
    public GetComponentResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetComponentResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetComponentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}