package openapisdk.models.operations;



public class ListContainerRecipesResponse {
    public Object callRateLimitExceededException;
    public ListContainerRecipesResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public ListContainerRecipesResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public ListContainerRecipesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public ListContainerRecipesResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object invalidPaginationTokenException;
    public ListContainerRecipesResponse withInvalidPaginationTokenException(Object invalidPaginationTokenException) {
        this.invalidPaginationTokenException = invalidPaginationTokenException;
        return this;
    }
    public Object invalidRequestException;
    public ListContainerRecipesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListContainerRecipesResponse listContainerRecipesResponse;
    public ListContainerRecipesResponse withListContainerRecipesResponse(openapisdk.models.shared.ListContainerRecipesResponse listContainerRecipesResponse) {
        this.listContainerRecipesResponse = listContainerRecipesResponse;
        return this;
    }
    public Object serviceException;
    public ListContainerRecipesResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListContainerRecipesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListContainerRecipesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}