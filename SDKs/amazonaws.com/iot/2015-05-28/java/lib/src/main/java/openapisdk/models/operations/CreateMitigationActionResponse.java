package openapisdk.models.operations;



public class CreateMitigationActionResponse {
    public String contentType;
    public CreateMitigationActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateMitigationActionResponse createMitigationActionResponse;
    public CreateMitigationActionResponse withCreateMitigationActionResponse(openapisdk.models.shared.CreateMitigationActionResponse createMitigationActionResponse) {
        this.createMitigationActionResponse = createMitigationActionResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateMitigationActionResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public CreateMitigationActionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public CreateMitigationActionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateMitigationActionResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Long statusCode;
    public CreateMitigationActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateMitigationActionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}