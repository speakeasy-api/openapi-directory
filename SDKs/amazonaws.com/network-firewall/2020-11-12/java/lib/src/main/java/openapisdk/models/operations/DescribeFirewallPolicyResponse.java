package openapisdk.models.operations;



public class DescribeFirewallPolicyResponse {
    public String contentType;
    public DescribeFirewallPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeFirewallPolicyResponse describeFirewallPolicyResponse;
    public DescribeFirewallPolicyResponse withDescribeFirewallPolicyResponse(openapisdk.models.shared.DescribeFirewallPolicyResponse describeFirewallPolicyResponse) {
        this.describeFirewallPolicyResponse = describeFirewallPolicyResponse;
        return this;
    }
    public Object internalServerError;
    public DescribeFirewallPolicyResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidRequestException;
    public DescribeFirewallPolicyResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeFirewallPolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeFirewallPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeFirewallPolicyResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}