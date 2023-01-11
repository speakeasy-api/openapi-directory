package openapisdk.models.operations;



public class CreateWorldGenerationJobResponse {
    public String contentType;
    public CreateWorldGenerationJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateWorldGenerationJobResponse createWorldGenerationJobResponse;
    public CreateWorldGenerationJobResponse withCreateWorldGenerationJobResponse(openapisdk.models.shared.CreateWorldGenerationJobResponse createWorldGenerationJobResponse) {
        this.createWorldGenerationJobResponse = createWorldGenerationJobResponse;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public CreateWorldGenerationJobResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object internalServerException;
    public CreateWorldGenerationJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public CreateWorldGenerationJobResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public CreateWorldGenerationJobResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateWorldGenerationJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public CreateWorldGenerationJobResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CreateWorldGenerationJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateWorldGenerationJobResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}