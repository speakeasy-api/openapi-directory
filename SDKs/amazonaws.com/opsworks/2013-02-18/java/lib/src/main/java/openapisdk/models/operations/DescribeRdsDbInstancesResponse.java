package openapisdk.models.operations;



public class DescribeRdsDbInstancesResponse {
    public String contentType;
    public DescribeRdsDbInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeRdsDbInstancesResult describeRdsDbInstancesResult;
    public DescribeRdsDbInstancesResponse withDescribeRdsDbInstancesResult(openapisdk.models.shared.DescribeRdsDbInstancesResult describeRdsDbInstancesResult) {
        this.describeRdsDbInstancesResult = describeRdsDbInstancesResult;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeRdsDbInstancesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeRdsDbInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeRdsDbInstancesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}