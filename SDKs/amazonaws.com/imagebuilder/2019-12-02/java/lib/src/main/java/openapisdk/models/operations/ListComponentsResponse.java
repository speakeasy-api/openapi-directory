package openapisdk.models.operations;



public class ListComponentsResponse {
    public Object callRateLimitExceededException;
    public ListComponentsResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public ListComponentsResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public ListComponentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public ListComponentsResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object invalidPaginationTokenException;
    public ListComponentsResponse withInvalidPaginationTokenException(Object invalidPaginationTokenException) {
        this.invalidPaginationTokenException = invalidPaginationTokenException;
        return this;
    }
    public Object invalidRequestException;
    public ListComponentsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListComponentsResponse listComponentsResponse;
    public ListComponentsResponse withListComponentsResponse(openapisdk.models.shared.ListComponentsResponse listComponentsResponse) {
        this.listComponentsResponse = listComponentsResponse;
        return this;
    }
    public Object serviceException;
    public ListComponentsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListComponentsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListComponentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}