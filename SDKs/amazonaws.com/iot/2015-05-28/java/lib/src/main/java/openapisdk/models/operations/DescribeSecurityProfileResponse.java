package openapisdk.models.operations;



public class DescribeSecurityProfileResponse {
    public String contentType;
    public DescribeSecurityProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeSecurityProfileResponse describeSecurityProfileResponse;
    public DescribeSecurityProfileResponse withDescribeSecurityProfileResponse(openapisdk.models.shared.DescribeSecurityProfileResponse describeSecurityProfileResponse) {
        this.describeSecurityProfileResponse = describeSecurityProfileResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeSecurityProfileResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeSecurityProfileResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeSecurityProfileResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeSecurityProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeSecurityProfileResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}