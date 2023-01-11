package openapisdk.models.operations;



public class DeleteContainerRecipeResponse {
    public Object callRateLimitExceededException;
    public DeleteContainerRecipeResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public DeleteContainerRecipeResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DeleteContainerRecipeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteContainerRecipeResponse deleteContainerRecipeResponse;
    public DeleteContainerRecipeResponse withDeleteContainerRecipeResponse(openapisdk.models.shared.DeleteContainerRecipeResponse deleteContainerRecipeResponse) {
        this.deleteContainerRecipeResponse = deleteContainerRecipeResponse;
        return this;
    }
    public Object forbiddenException;
    public DeleteContainerRecipeResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteContainerRecipeResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceDependencyException;
    public DeleteContainerRecipeResponse withResourceDependencyException(Object resourceDependencyException) {
        this.resourceDependencyException = resourceDependencyException;
        return this;
    }
    public Object serviceException;
    public DeleteContainerRecipeResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeleteContainerRecipeResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteContainerRecipeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}