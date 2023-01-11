package openapisdk.models.operations;



public class UpdateImagePipelineResponse {
    public Object callRateLimitExceededException;
    public UpdateImagePipelineResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public UpdateImagePipelineResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public UpdateImagePipelineResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public UpdateImagePipelineResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public UpdateImagePipelineResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateImagePipelineResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceInUseException;
    public UpdateImagePipelineResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object serviceException;
    public UpdateImagePipelineResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public UpdateImagePipelineResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public UpdateImagePipelineResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateImagePipelineResponse updateImagePipelineResponse;
    public UpdateImagePipelineResponse withUpdateImagePipelineResponse(openapisdk.models.shared.UpdateImagePipelineResponse updateImagePipelineResponse) {
        this.updateImagePipelineResponse = updateImagePipelineResponse;
        return this;
    }
}