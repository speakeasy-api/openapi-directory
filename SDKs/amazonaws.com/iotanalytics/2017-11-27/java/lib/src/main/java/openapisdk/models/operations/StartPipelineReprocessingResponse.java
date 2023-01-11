package openapisdk.models.operations;



public class StartPipelineReprocessingResponse {
    public String contentType;
    public StartPipelineReprocessingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public StartPipelineReprocessingResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public StartPipelineReprocessingResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public StartPipelineReprocessingResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartPipelineReprocessingResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public StartPipelineReprocessingResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public openapisdk.models.shared.StartPipelineReprocessingResponse startPipelineReprocessingResponse;
    public StartPipelineReprocessingResponse withStartPipelineReprocessingResponse(openapisdk.models.shared.StartPipelineReprocessingResponse startPipelineReprocessingResponse) {
        this.startPipelineReprocessingResponse = startPipelineReprocessingResponse;
        return this;
    }
    public Long statusCode;
    public StartPipelineReprocessingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public StartPipelineReprocessingResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}