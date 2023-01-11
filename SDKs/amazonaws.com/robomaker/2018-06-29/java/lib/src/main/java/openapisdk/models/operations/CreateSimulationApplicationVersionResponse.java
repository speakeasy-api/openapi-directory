package openapisdk.models.operations;



public class CreateSimulationApplicationVersionResponse {
    public String contentType;
    public CreateSimulationApplicationVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateSimulationApplicationVersionResponse createSimulationApplicationVersionResponse;
    public CreateSimulationApplicationVersionResponse withCreateSimulationApplicationVersionResponse(openapisdk.models.shared.CreateSimulationApplicationVersionResponse createSimulationApplicationVersionResponse) {
        this.createSimulationApplicationVersionResponse = createSimulationApplicationVersionResponse;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public CreateSimulationApplicationVersionResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object internalServerException;
    public CreateSimulationApplicationVersionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public CreateSimulationApplicationVersionResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public CreateSimulationApplicationVersionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateSimulationApplicationVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateSimulationApplicationVersionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}