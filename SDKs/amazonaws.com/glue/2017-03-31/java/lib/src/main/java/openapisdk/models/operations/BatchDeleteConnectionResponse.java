package openapisdk.models.operations;



public class BatchDeleteConnectionResponse {
    public openapisdk.models.shared.BatchDeleteConnectionResponse batchDeleteConnectionResponse;
    public BatchDeleteConnectionResponse withBatchDeleteConnectionResponse(openapisdk.models.shared.BatchDeleteConnectionResponse batchDeleteConnectionResponse) {
        this.batchDeleteConnectionResponse = batchDeleteConnectionResponse;
        return this;
    }
    public String contentType;
    public BatchDeleteConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public BatchDeleteConnectionResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object operationTimeoutException;
    public BatchDeleteConnectionResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public BatchDeleteConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}