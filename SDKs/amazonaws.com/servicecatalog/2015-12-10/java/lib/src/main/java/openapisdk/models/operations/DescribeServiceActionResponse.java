package openapisdk.models.operations;



public class DescribeServiceActionResponse {
    public String contentType;
    public DescribeServiceActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeServiceActionOutput describeServiceActionOutput;
    public DescribeServiceActionResponse withDescribeServiceActionOutput(openapisdk.models.shared.DescribeServiceActionOutput describeServiceActionOutput) {
        this.describeServiceActionOutput = describeServiceActionOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeServiceActionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeServiceActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}