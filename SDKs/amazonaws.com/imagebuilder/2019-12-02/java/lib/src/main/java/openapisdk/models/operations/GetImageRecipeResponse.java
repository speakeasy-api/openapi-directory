package openapisdk.models.operations;



public class GetImageRecipeResponse {
    public Object callRateLimitExceededException;
    public GetImageRecipeResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public GetImageRecipeResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public GetImageRecipeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public GetImageRecipeResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public openapisdk.models.shared.GetImageRecipeResponse getImageRecipeResponse;
    public GetImageRecipeResponse withGetImageRecipeResponse(openapisdk.models.shared.GetImageRecipeResponse getImageRecipeResponse) {
        this.getImageRecipeResponse = getImageRecipeResponse;
        return this;
    }
    public Object invalidRequestException;
    public GetImageRecipeResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceException;
    public GetImageRecipeResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetImageRecipeResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetImageRecipeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}