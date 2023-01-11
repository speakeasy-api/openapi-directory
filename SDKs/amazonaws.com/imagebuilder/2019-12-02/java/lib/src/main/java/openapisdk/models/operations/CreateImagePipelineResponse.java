package openapisdk.models.operations;



public class CreateImagePipelineResponse {
    public Object callRateLimitExceededException;
    public CreateImagePipelineResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public CreateImagePipelineResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public CreateImagePipelineResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateImagePipelineResponse createImagePipelineResponse;
    public CreateImagePipelineResponse withCreateImagePipelineResponse(openapisdk.models.shared.CreateImagePipelineResponse createImagePipelineResponse) {
        this.createImagePipelineResponse = createImagePipelineResponse;
        return this;
    }
    public Object forbiddenException;
    public CreateImagePipelineResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public CreateImagePipelineResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object invalidRequestException;
    public CreateImagePipelineResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateImagePipelineResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceInUseException;
    public CreateImagePipelineResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object serviceException;
    public CreateImagePipelineResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateImagePipelineResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Object serviceUnavailableException;
    public CreateImagePipelineResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CreateImagePipelineResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}