package openapisdk.models.operations;



public class DescribeRecordResponse {
    public String contentType;
    public DescribeRecordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeRecordOutput describeRecordOutput;
    public DescribeRecordResponse withDescribeRecordOutput(openapisdk.models.shared.DescribeRecordOutput describeRecordOutput) {
        this.describeRecordOutput = describeRecordOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeRecordResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeRecordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}