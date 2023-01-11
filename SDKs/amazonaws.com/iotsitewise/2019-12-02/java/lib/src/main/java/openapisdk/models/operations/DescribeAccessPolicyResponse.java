package openapisdk.models.operations;



public class DescribeAccessPolicyResponse {
    public String contentType;
    public DescribeAccessPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAccessPolicyResponse describeAccessPolicyResponse;
    public DescribeAccessPolicyResponse withDescribeAccessPolicyResponse(openapisdk.models.shared.DescribeAccessPolicyResponse describeAccessPolicyResponse) {
        this.describeAccessPolicyResponse = describeAccessPolicyResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeAccessPolicyResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeAccessPolicyResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeAccessPolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeAccessPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeAccessPolicyResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}