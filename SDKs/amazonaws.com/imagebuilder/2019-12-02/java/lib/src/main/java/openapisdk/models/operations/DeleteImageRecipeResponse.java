package openapisdk.models.operations;



public class DeleteImageRecipeResponse {
    public Object callRateLimitExceededException;
    public DeleteImageRecipeResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public DeleteImageRecipeResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DeleteImageRecipeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteImageRecipeResponse deleteImageRecipeResponse;
    public DeleteImageRecipeResponse withDeleteImageRecipeResponse(openapisdk.models.shared.DeleteImageRecipeResponse deleteImageRecipeResponse) {
        this.deleteImageRecipeResponse = deleteImageRecipeResponse;
        return this;
    }
    public Object forbiddenException;
    public DeleteImageRecipeResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteImageRecipeResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceDependencyException;
    public DeleteImageRecipeResponse withResourceDependencyException(Object resourceDependencyException) {
        this.resourceDependencyException = resourceDependencyException;
        return this;
    }
    public Object serviceException;
    public DeleteImageRecipeResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeleteImageRecipeResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteImageRecipeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}