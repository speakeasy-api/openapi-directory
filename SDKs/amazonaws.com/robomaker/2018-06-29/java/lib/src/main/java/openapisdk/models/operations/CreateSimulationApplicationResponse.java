package openapisdk.models.operations;



public class CreateSimulationApplicationResponse {
    public String contentType;
    public CreateSimulationApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateSimulationApplicationResponse createSimulationApplicationResponse;
    public CreateSimulationApplicationResponse withCreateSimulationApplicationResponse(openapisdk.models.shared.CreateSimulationApplicationResponse createSimulationApplicationResponse) {
        this.createSimulationApplicationResponse = createSimulationApplicationResponse;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public CreateSimulationApplicationResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object internalServerException;
    public CreateSimulationApplicationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public CreateSimulationApplicationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public CreateSimulationApplicationResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateSimulationApplicationResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Long statusCode;
    public CreateSimulationApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateSimulationApplicationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}