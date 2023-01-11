package openapisdk.models.operations;



public class BatchGetNamedQueryResponse {
    public openapisdk.models.shared.BatchGetNamedQueryOutput batchGetNamedQueryOutput;
    public BatchGetNamedQueryResponse withBatchGetNamedQueryOutput(openapisdk.models.shared.BatchGetNamedQueryOutput batchGetNamedQueryOutput) {
        this.batchGetNamedQueryOutput = batchGetNamedQueryOutput;
        return this;
    }
    public String contentType;
    public BatchGetNamedQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public BatchGetNamedQueryResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public BatchGetNamedQueryResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public BatchGetNamedQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}