package openapisdk.models.operations;



public class ListImagePipelinesResponse {
    public Object callRateLimitExceededException;
    public ListImagePipelinesResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public ListImagePipelinesResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public ListImagePipelinesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public ListImagePipelinesResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object invalidPaginationTokenException;
    public ListImagePipelinesResponse withInvalidPaginationTokenException(Object invalidPaginationTokenException) {
        this.invalidPaginationTokenException = invalidPaginationTokenException;
        return this;
    }
    public Object invalidRequestException;
    public ListImagePipelinesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListImagePipelinesResponse listImagePipelinesResponse;
    public ListImagePipelinesResponse withListImagePipelinesResponse(openapisdk.models.shared.ListImagePipelinesResponse listImagePipelinesResponse) {
        this.listImagePipelinesResponse = listImagePipelinesResponse;
        return this;
    }
    public Object serviceException;
    public ListImagePipelinesResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListImagePipelinesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListImagePipelinesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}