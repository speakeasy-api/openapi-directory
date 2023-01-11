package openapisdk.models.operations;



public class GetContainerRecipeResponse {
    public Object callRateLimitExceededException;
    public GetContainerRecipeResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public GetContainerRecipeResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public GetContainerRecipeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public GetContainerRecipeResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public openapisdk.models.shared.GetContainerRecipeResponse getContainerRecipeResponse;
    public GetContainerRecipeResponse withGetContainerRecipeResponse(openapisdk.models.shared.GetContainerRecipeResponse getContainerRecipeResponse) {
        this.getContainerRecipeResponse = getContainerRecipeResponse;
        return this;
    }
    public Object invalidRequestException;
    public GetContainerRecipeResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceException;
    public GetContainerRecipeResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetContainerRecipeResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetContainerRecipeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}