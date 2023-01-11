package openapisdk.models.operations;



public class DeleteImagePipelineResponse {
    public Object callRateLimitExceededException;
    public DeleteImagePipelineResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public DeleteImagePipelineResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DeleteImagePipelineResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteImagePipelineResponse deleteImagePipelineResponse;
    public DeleteImagePipelineResponse withDeleteImagePipelineResponse(openapisdk.models.shared.DeleteImagePipelineResponse deleteImagePipelineResponse) {
        this.deleteImagePipelineResponse = deleteImagePipelineResponse;
        return this;
    }
    public Object forbiddenException;
    public DeleteImagePipelineResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteImagePipelineResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceDependencyException;
    public DeleteImagePipelineResponse withResourceDependencyException(Object resourceDependencyException) {
        this.resourceDependencyException = resourceDependencyException;
        return this;
    }
    public Object serviceException;
    public DeleteImagePipelineResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeleteImagePipelineResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteImagePipelineResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}