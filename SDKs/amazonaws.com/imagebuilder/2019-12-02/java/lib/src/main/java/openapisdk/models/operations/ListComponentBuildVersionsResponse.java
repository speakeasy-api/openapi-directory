package openapisdk.models.operations;



public class ListComponentBuildVersionsResponse {
    public Object callRateLimitExceededException;
    public ListComponentBuildVersionsResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public ListComponentBuildVersionsResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public ListComponentBuildVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public ListComponentBuildVersionsResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object invalidPaginationTokenException;
    public ListComponentBuildVersionsResponse withInvalidPaginationTokenException(Object invalidPaginationTokenException) {
        this.invalidPaginationTokenException = invalidPaginationTokenException;
        return this;
    }
    public Object invalidRequestException;
    public ListComponentBuildVersionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListComponentBuildVersionsResponse listComponentBuildVersionsResponse;
    public ListComponentBuildVersionsResponse withListComponentBuildVersionsResponse(openapisdk.models.shared.ListComponentBuildVersionsResponse listComponentBuildVersionsResponse) {
        this.listComponentBuildVersionsResponse = listComponentBuildVersionsResponse;
        return this;
    }
    public Object serviceException;
    public ListComponentBuildVersionsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListComponentBuildVersionsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListComponentBuildVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}