package openapisdk.models.operations;



public class BatchGetQueryExecutionResponse {
    public openapisdk.models.shared.BatchGetQueryExecutionOutput batchGetQueryExecutionOutput;
    public BatchGetQueryExecutionResponse withBatchGetQueryExecutionOutput(openapisdk.models.shared.BatchGetQueryExecutionOutput batchGetQueryExecutionOutput) {
        this.batchGetQueryExecutionOutput = batchGetQueryExecutionOutput;
        return this;
    }
    public String contentType;
    public BatchGetQueryExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public BatchGetQueryExecutionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public BatchGetQueryExecutionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public BatchGetQueryExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}