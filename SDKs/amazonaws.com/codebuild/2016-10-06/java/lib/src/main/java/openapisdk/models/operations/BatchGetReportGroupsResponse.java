package openapisdk.models.operations;



public class BatchGetReportGroupsResponse {
    public openapisdk.models.shared.BatchGetReportGroupsOutput batchGetReportGroupsOutput;
    public BatchGetReportGroupsResponse withBatchGetReportGroupsOutput(openapisdk.models.shared.BatchGetReportGroupsOutput batchGetReportGroupsOutput) {
        this.batchGetReportGroupsOutput = batchGetReportGroupsOutput;
        return this;
    }
    public String contentType;
    public BatchGetReportGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public BatchGetReportGroupsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public BatchGetReportGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}