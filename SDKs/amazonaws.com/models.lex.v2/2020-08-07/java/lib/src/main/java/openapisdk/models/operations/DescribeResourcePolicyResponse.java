package openapisdk.models.operations;



public class DescribeResourcePolicyResponse {
    public String contentType;
    public DescribeResourcePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeResourcePolicyResponse describeResourcePolicyResponse;
    public DescribeResourcePolicyResponse withDescribeResourcePolicyResponse(openapisdk.models.shared.DescribeResourcePolicyResponse describeResourcePolicyResponse) {
        this.describeResourcePolicyResponse = describeResourcePolicyResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeResourcePolicyResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeResourcePolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeResourcePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeResourcePolicyResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}