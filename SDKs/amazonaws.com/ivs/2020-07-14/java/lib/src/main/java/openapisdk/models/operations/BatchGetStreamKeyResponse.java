package openapisdk.models.operations;



public class BatchGetStreamKeyResponse {
    public openapisdk.models.shared.BatchGetStreamKeyResponse batchGetStreamKeyResponse;
    public BatchGetStreamKeyResponse withBatchGetStreamKeyResponse(openapisdk.models.shared.BatchGetStreamKeyResponse batchGetStreamKeyResponse) {
        this.batchGetStreamKeyResponse = batchGetStreamKeyResponse;
        return this;
    }
    public String contentType;
    public BatchGetStreamKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BatchGetStreamKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}