package openapisdk.models.operations;



public class BatchGetBuildBatchesResponse {
    public openapisdk.models.shared.BatchGetBuildBatchesOutput batchGetBuildBatchesOutput;
    public BatchGetBuildBatchesResponse withBatchGetBuildBatchesOutput(openapisdk.models.shared.BatchGetBuildBatchesOutput batchGetBuildBatchesOutput) {
        this.batchGetBuildBatchesOutput = batchGetBuildBatchesOutput;
        return this;
    }
    public String contentType;
    public BatchGetBuildBatchesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public BatchGetBuildBatchesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public BatchGetBuildBatchesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}