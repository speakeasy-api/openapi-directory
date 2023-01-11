package openapisdk.models.operations;



public class BatchDisassociateProjectAssetsResponse {
    public openapisdk.models.shared.BatchDisassociateProjectAssetsResponse batchDisassociateProjectAssetsResponse;
    public BatchDisassociateProjectAssetsResponse withBatchDisassociateProjectAssetsResponse(openapisdk.models.shared.BatchDisassociateProjectAssetsResponse batchDisassociateProjectAssetsResponse) {
        this.batchDisassociateProjectAssetsResponse = batchDisassociateProjectAssetsResponse;
        return this;
    }
    public String contentType;
    public BatchDisassociateProjectAssetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public BatchDisassociateProjectAssetsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public BatchDisassociateProjectAssetsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public BatchDisassociateProjectAssetsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public BatchDisassociateProjectAssetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public BatchDisassociateProjectAssetsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}