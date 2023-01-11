package openapisdk.models.operations;



public class BatchGetProjectsResponse {
    public openapisdk.models.shared.BatchGetProjectsOutput batchGetProjectsOutput;
    public BatchGetProjectsResponse withBatchGetProjectsOutput(openapisdk.models.shared.BatchGetProjectsOutput batchGetProjectsOutput) {
        this.batchGetProjectsOutput = batchGetProjectsOutput;
        return this;
    }
    public String contentType;
    public BatchGetProjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public BatchGetProjectsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public BatchGetProjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}