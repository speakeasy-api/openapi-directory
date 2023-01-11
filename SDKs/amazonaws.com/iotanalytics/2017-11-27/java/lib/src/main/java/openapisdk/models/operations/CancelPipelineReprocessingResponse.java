package openapisdk.models.operations;



public class CancelPipelineReprocessingResponse {
    public java.util.Map<String, Object> cancelPipelineReprocessingResponse;
    public CancelPipelineReprocessingResponse withCancelPipelineReprocessingResponse(java.util.Map<String, Object> cancelPipelineReprocessingResponse) {
        this.cancelPipelineReprocessingResponse = cancelPipelineReprocessingResponse;
        return this;
    }
    public String contentType;
    public CancelPipelineReprocessingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public CancelPipelineReprocessingResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public CancelPipelineReprocessingResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public CancelPipelineReprocessingResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public CancelPipelineReprocessingResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CancelPipelineReprocessingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CancelPipelineReprocessingResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}