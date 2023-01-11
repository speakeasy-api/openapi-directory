package openapisdk.models.operations;



public class CancelSimulationJobResponse {
    public java.util.Map<String, Object> cancelSimulationJobResponse;
    public CancelSimulationJobResponse withCancelSimulationJobResponse(java.util.Map<String, Object> cancelSimulationJobResponse) {
        this.cancelSimulationJobResponse = cancelSimulationJobResponse;
        return this;
    }
    public String contentType;
    public CancelSimulationJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public CancelSimulationJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public CancelSimulationJobResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public CancelSimulationJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CancelSimulationJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CancelSimulationJobResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}