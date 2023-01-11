package openapisdk.models.operations;



public class UpdateAssetResponse {
    public Object conflictingOperationException;
    public UpdateAssetResponse withConflictingOperationException(Object conflictingOperationException) {
        this.conflictingOperationException = conflictingOperationException;
        return this;
    }
    public String contentType;
    public UpdateAssetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UpdateAssetResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateAssetResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public UpdateAssetResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateAssetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateAssetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateAssetResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateAssetResponse updateAssetResponse;
    public UpdateAssetResponse withUpdateAssetResponse(openapisdk.models.shared.UpdateAssetResponse updateAssetResponse) {
        this.updateAssetResponse = updateAssetResponse;
        return this;
    }
}