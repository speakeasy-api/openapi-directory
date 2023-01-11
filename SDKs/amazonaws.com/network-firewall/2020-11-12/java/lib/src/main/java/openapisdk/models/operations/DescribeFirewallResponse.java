package openapisdk.models.operations;



public class DescribeFirewallResponse {
    public String contentType;
    public DescribeFirewallResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeFirewallResponse describeFirewallResponse;
    public DescribeFirewallResponse withDescribeFirewallResponse(openapisdk.models.shared.DescribeFirewallResponse describeFirewallResponse) {
        this.describeFirewallResponse = describeFirewallResponse;
        return this;
    }
    public Object internalServerError;
    public DescribeFirewallResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidRequestException;
    public DescribeFirewallResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeFirewallResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeFirewallResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeFirewallResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}