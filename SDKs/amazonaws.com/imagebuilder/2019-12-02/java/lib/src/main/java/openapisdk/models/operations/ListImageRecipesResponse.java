package openapisdk.models.operations;



public class ListImageRecipesResponse {
    public Object callRateLimitExceededException;
    public ListImageRecipesResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public ListImageRecipesResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public ListImageRecipesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public ListImageRecipesResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object invalidPaginationTokenException;
    public ListImageRecipesResponse withInvalidPaginationTokenException(Object invalidPaginationTokenException) {
        this.invalidPaginationTokenException = invalidPaginationTokenException;
        return this;
    }
    public Object invalidRequestException;
    public ListImageRecipesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListImageRecipesResponse listImageRecipesResponse;
    public ListImageRecipesResponse withListImageRecipesResponse(openapisdk.models.shared.ListImageRecipesResponse listImageRecipesResponse) {
        this.listImageRecipesResponse = listImageRecipesResponse;
        return this;
    }
    public Object serviceException;
    public ListImageRecipesResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListImageRecipesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListImageRecipesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}