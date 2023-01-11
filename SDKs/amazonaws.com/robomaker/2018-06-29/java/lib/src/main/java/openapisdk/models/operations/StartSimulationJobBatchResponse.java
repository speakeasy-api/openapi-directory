package openapisdk.models.operations;



public class StartSimulationJobBatchResponse {
    public String contentType;
    public StartSimulationJobBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public StartSimulationJobBatchResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object internalServerException;
    public StartSimulationJobBatchResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public StartSimulationJobBatchResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public StartSimulationJobBatchResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.StartSimulationJobBatchResponse startSimulationJobBatchResponse;
    public StartSimulationJobBatchResponse withStartSimulationJobBatchResponse(openapisdk.models.shared.StartSimulationJobBatchResponse startSimulationJobBatchResponse) {
        this.startSimulationJobBatchResponse = startSimulationJobBatchResponse;
        return this;
    }
    public Long statusCode;
    public StartSimulationJobBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public StartSimulationJobBatchResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}