package openapisdk.models.operations;



public class ListImageBuildVersionsResponse {
    public Object callRateLimitExceededException;
    public ListImageBuildVersionsResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public ListImageBuildVersionsResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public ListImageBuildVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public ListImageBuildVersionsResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object invalidPaginationTokenException;
    public ListImageBuildVersionsResponse withInvalidPaginationTokenException(Object invalidPaginationTokenException) {
        this.invalidPaginationTokenException = invalidPaginationTokenException;
        return this;
    }
    public Object invalidRequestException;
    public ListImageBuildVersionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListImageBuildVersionsResponse listImageBuildVersionsResponse;
    public ListImageBuildVersionsResponse withListImageBuildVersionsResponse(openapisdk.models.shared.ListImageBuildVersionsResponse listImageBuildVersionsResponse) {
        this.listImageBuildVersionsResponse = listImageBuildVersionsResponse;
        return this;
    }
    public Object serviceException;
    public ListImageBuildVersionsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListImageBuildVersionsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListImageBuildVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}