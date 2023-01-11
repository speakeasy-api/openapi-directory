package openapisdk.models.operations;



public class BatchGetReportsResponse {
    public openapisdk.models.shared.BatchGetReportsOutput batchGetReportsOutput;
    public BatchGetReportsResponse withBatchGetReportsOutput(openapisdk.models.shared.BatchGetReportsOutput batchGetReportsOutput) {
        this.batchGetReportsOutput = batchGetReportsOutput;
        return this;
    }
    public String contentType;
    public BatchGetReportsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public BatchGetReportsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public BatchGetReportsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}