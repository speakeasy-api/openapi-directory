package openapisdk.models.operations;



public class DeleteComponentResponse {
    public Object callRateLimitExceededException;
    public DeleteComponentResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public DeleteComponentResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DeleteComponentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteComponentResponse deleteComponentResponse;
    public DeleteComponentResponse withDeleteComponentResponse(openapisdk.models.shared.DeleteComponentResponse deleteComponentResponse) {
        this.deleteComponentResponse = deleteComponentResponse;
        return this;
    }
    public Object forbiddenException;
    public DeleteComponentResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteComponentResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceDependencyException;
    public DeleteComponentResponse withResourceDependencyException(Object resourceDependencyException) {
        this.resourceDependencyException = resourceDependencyException;
        return this;
    }
    public Object serviceException;
    public DeleteComponentResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeleteComponentResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteComponentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}