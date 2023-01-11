package openapisdk.models.operations;



public class BatchDeleteWorldsResponse {
    public openapisdk.models.shared.BatchDeleteWorldsResponse batchDeleteWorldsResponse;
    public BatchDeleteWorldsResponse withBatchDeleteWorldsResponse(openapisdk.models.shared.BatchDeleteWorldsResponse batchDeleteWorldsResponse) {
        this.batchDeleteWorldsResponse = batchDeleteWorldsResponse;
        return this;
    }
    public String contentType;
    public BatchDeleteWorldsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public BatchDeleteWorldsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public BatchDeleteWorldsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Long statusCode;
    public BatchDeleteWorldsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public BatchDeleteWorldsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}