package openapisdk.models.operations;



public class DescribeConstraintResponse {
    public String contentType;
    public DescribeConstraintResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeConstraintOutput describeConstraintOutput;
    public DescribeConstraintResponse withDescribeConstraintOutput(openapisdk.models.shared.DescribeConstraintOutput describeConstraintOutput) {
        this.describeConstraintOutput = describeConstraintOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeConstraintResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeConstraintResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}