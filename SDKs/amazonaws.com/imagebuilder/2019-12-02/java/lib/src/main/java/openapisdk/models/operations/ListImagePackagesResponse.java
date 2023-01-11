package openapisdk.models.operations;



public class ListImagePackagesResponse {
    public Object callRateLimitExceededException;
    public ListImagePackagesResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public ListImagePackagesResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public ListImagePackagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public ListImagePackagesResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object invalidPaginationTokenException;
    public ListImagePackagesResponse withInvalidPaginationTokenException(Object invalidPaginationTokenException) {
        this.invalidPaginationTokenException = invalidPaginationTokenException;
        return this;
    }
    public Object invalidRequestException;
    public ListImagePackagesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListImagePackagesResponse listImagePackagesResponse;
    public ListImagePackagesResponse withListImagePackagesResponse(openapisdk.models.shared.ListImagePackagesResponse listImagePackagesResponse) {
        this.listImagePackagesResponse = listImagePackagesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListImagePackagesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public ListImagePackagesResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListImagePackagesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListImagePackagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}