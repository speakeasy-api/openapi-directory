package openapisdk.models.operations;



public class DeleteImageResponse {
    public Object callRateLimitExceededException;
    public DeleteImageResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public DeleteImageResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DeleteImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteImageResponse deleteImageResponse;
    public DeleteImageResponse withDeleteImageResponse(openapisdk.models.shared.DeleteImageResponse deleteImageResponse) {
        this.deleteImageResponse = deleteImageResponse;
        return this;
    }
    public Object forbiddenException;
    public DeleteImageResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteImageResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceDependencyException;
    public DeleteImageResponse withResourceDependencyException(Object resourceDependencyException) {
        this.resourceDependencyException = resourceDependencyException;
        return this;
    }
    public Object serviceException;
    public DeleteImageResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeleteImageResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}