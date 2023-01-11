package openapisdk.models.operations;



public class DescribeSecurityPolicyResponse {
    public String contentType;
    public DescribeSecurityPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeSecurityPolicyResponse describeSecurityPolicyResponse;
    public DescribeSecurityPolicyResponse withDescribeSecurityPolicyResponse(openapisdk.models.shared.DescribeSecurityPolicyResponse describeSecurityPolicyResponse) {
        this.describeSecurityPolicyResponse = describeSecurityPolicyResponse;
        return this;
    }
    public Object internalServiceError;
    public DescribeSecurityPolicyResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public DescribeSecurityPolicyResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeSecurityPolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeSecurityPolicyResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeSecurityPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}