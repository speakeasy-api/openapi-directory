package openapisdk.models.operations;



public class StartImagePipelineExecutionResponse {
    public Object callRateLimitExceededException;
    public StartImagePipelineExecutionResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public StartImagePipelineExecutionResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public StartImagePipelineExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public StartImagePipelineExecutionResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public StartImagePipelineExecutionResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object invalidRequestException;
    public StartImagePipelineExecutionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceInUseException;
    public StartImagePipelineExecutionResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartImagePipelineExecutionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public StartImagePipelineExecutionResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public StartImagePipelineExecutionResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public openapisdk.models.shared.StartImagePipelineExecutionResponse startImagePipelineExecutionResponse;
    public StartImagePipelineExecutionResponse withStartImagePipelineExecutionResponse(openapisdk.models.shared.StartImagePipelineExecutionResponse startImagePipelineExecutionResponse) {
        this.startImagePipelineExecutionResponse = startImagePipelineExecutionResponse;
        return this;
    }
    public Long statusCode;
    public StartImagePipelineExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}