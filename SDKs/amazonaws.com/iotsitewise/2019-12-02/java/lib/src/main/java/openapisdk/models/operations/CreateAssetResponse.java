package openapisdk.models.operations;



public class CreateAssetResponse {
    public Object conflictingOperationException;
    public CreateAssetResponse withConflictingOperationException(Object conflictingOperationException) {
        this.conflictingOperationException = conflictingOperationException;
        return this;
    }
    public String contentType;
    public CreateAssetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateAssetResponse createAssetResponse;
    public CreateAssetResponse withCreateAssetResponse(openapisdk.models.shared.CreateAssetResponse createAssetResponse) {
        this.createAssetResponse = createAssetResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateAssetResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public CreateAssetResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public CreateAssetResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateAssetResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateAssetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateAssetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateAssetResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}