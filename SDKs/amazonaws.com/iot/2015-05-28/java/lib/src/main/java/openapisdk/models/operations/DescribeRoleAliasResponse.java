package openapisdk.models.operations;



public class DescribeRoleAliasResponse {
    public String contentType;
    public DescribeRoleAliasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeRoleAliasResponse describeRoleAliasResponse;
    public DescribeRoleAliasResponse withDescribeRoleAliasResponse(openapisdk.models.shared.DescribeRoleAliasResponse describeRoleAliasResponse) {
        this.describeRoleAliasResponse = describeRoleAliasResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeRoleAliasResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeRoleAliasResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeRoleAliasResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeRoleAliasResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeRoleAliasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeRoleAliasResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public DescribeRoleAliasResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}