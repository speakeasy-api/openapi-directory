package openapisdk.models.operations;



public class CancelSimulationJobBatchResponse {
    public java.util.Map<String, Object> cancelSimulationJobBatchResponse;
    public CancelSimulationJobBatchResponse withCancelSimulationJobBatchResponse(java.util.Map<String, Object> cancelSimulationJobBatchResponse) {
        this.cancelSimulationJobBatchResponse = cancelSimulationJobBatchResponse;
        return this;
    }
    public String contentType;
    public CancelSimulationJobBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public CancelSimulationJobBatchResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public CancelSimulationJobBatchResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public CancelSimulationJobBatchResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CancelSimulationJobBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CancelSimulationJobBatchResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}