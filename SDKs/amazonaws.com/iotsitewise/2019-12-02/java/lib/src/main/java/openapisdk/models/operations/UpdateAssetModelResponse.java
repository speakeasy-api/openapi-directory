package openapisdk.models.operations;



public class UpdateAssetModelResponse {
    public Object conflictingOperationException;
    public UpdateAssetModelResponse withConflictingOperationException(Object conflictingOperationException) {
        this.conflictingOperationException = conflictingOperationException;
        return this;
    }
    public String contentType;
    public UpdateAssetModelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UpdateAssetModelResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateAssetModelResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public UpdateAssetModelResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public UpdateAssetModelResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateAssetModelResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateAssetModelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateAssetModelResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateAssetModelResponse updateAssetModelResponse;
    public UpdateAssetModelResponse withUpdateAssetModelResponse(openapisdk.models.shared.UpdateAssetModelResponse updateAssetModelResponse) {
        this.updateAssetModelResponse = updateAssetModelResponse;
        return this;
    }
}