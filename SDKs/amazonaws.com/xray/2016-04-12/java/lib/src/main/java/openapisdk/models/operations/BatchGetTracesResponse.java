package openapisdk.models.operations;



public class BatchGetTracesResponse {
    public openapisdk.models.shared.BatchGetTracesResult batchGetTracesResult;
    public BatchGetTracesResponse withBatchGetTracesResult(openapisdk.models.shared.BatchGetTracesResult batchGetTracesResult) {
        this.batchGetTracesResult = batchGetTracesResult;
        return this;
    }
    public String contentType;
    public BatchGetTracesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidRequestException;
    public BatchGetTracesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public BatchGetTracesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttledException;
    public BatchGetTracesResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
}