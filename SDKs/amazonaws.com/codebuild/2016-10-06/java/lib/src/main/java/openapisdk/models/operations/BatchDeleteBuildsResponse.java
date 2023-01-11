package openapisdk.models.operations;



public class BatchDeleteBuildsResponse {
    public openapisdk.models.shared.BatchDeleteBuildsOutput batchDeleteBuildsOutput;
    public BatchDeleteBuildsResponse withBatchDeleteBuildsOutput(openapisdk.models.shared.BatchDeleteBuildsOutput batchDeleteBuildsOutput) {
        this.batchDeleteBuildsOutput = batchDeleteBuildsOutput;
        return this;
    }
    public String contentType;
    public BatchDeleteBuildsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public BatchDeleteBuildsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public BatchDeleteBuildsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}