package openapisdk.models.operations;



public class CreateSystemInstanceResponse {
    public String contentType;
    public CreateSystemInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateSystemInstanceResponse createSystemInstanceResponse;
    public CreateSystemInstanceResponse withCreateSystemInstanceResponse(openapisdk.models.shared.CreateSystemInstanceResponse createSystemInstanceResponse) {
        this.createSystemInstanceResponse = createSystemInstanceResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateSystemInstanceResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public CreateSystemInstanceResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public CreateSystemInstanceResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateSystemInstanceResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Long statusCode;
    public CreateSystemInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateSystemInstanceResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}