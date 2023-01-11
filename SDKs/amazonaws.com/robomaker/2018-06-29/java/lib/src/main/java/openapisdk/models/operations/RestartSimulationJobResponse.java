package openapisdk.models.operations;



public class RestartSimulationJobResponse {
    public String contentType;
    public RestartSimulationJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public RestartSimulationJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public RestartSimulationJobResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public RestartSimulationJobResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public RestartSimulationJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public java.util.Map<String, Object> restartSimulationJobResponse;
    public RestartSimulationJobResponse withRestartSimulationJobResponse(java.util.Map<String, Object> restartSimulationJobResponse) {
        this.restartSimulationJobResponse = restartSimulationJobResponse;
        return this;
    }
    public Long statusCode;
    public RestartSimulationJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public RestartSimulationJobResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}