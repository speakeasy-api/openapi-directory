package openapisdk.models.operations;



public class BatchGetBuildsResponse {
    public openapisdk.models.shared.BatchGetBuildsOutput batchGetBuildsOutput;
    public BatchGetBuildsResponse withBatchGetBuildsOutput(openapisdk.models.shared.BatchGetBuildsOutput batchGetBuildsOutput) {
        this.batchGetBuildsOutput = batchGetBuildsOutput;
        return this;
    }
    public String contentType;
    public BatchGetBuildsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public BatchGetBuildsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public BatchGetBuildsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}