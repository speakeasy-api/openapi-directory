package openapisdk.models.operations;



public class DescribeInstancesResponse {
    public String contentType;
    public DescribeInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeInstancesResult describeInstancesResult;
    public DescribeInstancesResponse withDescribeInstancesResult(openapisdk.models.shared.DescribeInstancesResult describeInstancesResult) {
        this.describeInstancesResult = describeInstancesResult;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeInstancesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeInstancesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}