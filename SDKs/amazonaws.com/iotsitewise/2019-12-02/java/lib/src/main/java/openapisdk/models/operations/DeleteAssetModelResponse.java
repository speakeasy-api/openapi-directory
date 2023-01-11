package openapisdk.models.operations;



public class DeleteAssetModelResponse {
    public Object conflictingOperationException;
    public DeleteAssetModelResponse withConflictingOperationException(Object conflictingOperationException) {
        this.conflictingOperationException = conflictingOperationException;
        return this;
    }
    public String contentType;
    public DeleteAssetModelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteAssetModelResponse deleteAssetModelResponse;
    public DeleteAssetModelResponse withDeleteAssetModelResponse(openapisdk.models.shared.DeleteAssetModelResponse deleteAssetModelResponse) {
        this.deleteAssetModelResponse = deleteAssetModelResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteAssetModelResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteAssetModelResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteAssetModelResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteAssetModelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteAssetModelResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}