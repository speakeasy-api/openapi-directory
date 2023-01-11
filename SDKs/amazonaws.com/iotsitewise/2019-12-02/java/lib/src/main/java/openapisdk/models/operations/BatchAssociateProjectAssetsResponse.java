package openapisdk.models.operations;



public class BatchAssociateProjectAssetsResponse {
    public openapisdk.models.shared.BatchAssociateProjectAssetsResponse batchAssociateProjectAssetsResponse;
    public BatchAssociateProjectAssetsResponse withBatchAssociateProjectAssetsResponse(openapisdk.models.shared.BatchAssociateProjectAssetsResponse batchAssociateProjectAssetsResponse) {
        this.batchAssociateProjectAssetsResponse = batchAssociateProjectAssetsResponse;
        return this;
    }
    public String contentType;
    public BatchAssociateProjectAssetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public BatchAssociateProjectAssetsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public BatchAssociateProjectAssetsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public BatchAssociateProjectAssetsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public BatchAssociateProjectAssetsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public BatchAssociateProjectAssetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public BatchAssociateProjectAssetsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}