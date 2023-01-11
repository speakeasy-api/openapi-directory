package openapisdk.models.operations;



public class DescribeProtectionResponse {
    public String contentType;
    public DescribeProtectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeProtectionResponse describeProtectionResponse;
    public DescribeProtectionResponse withDescribeProtectionResponse(openapisdk.models.shared.DescribeProtectionResponse describeProtectionResponse) {
        this.describeProtectionResponse = describeProtectionResponse;
        return this;
    }
    public Object internalErrorException;
    public DescribeProtectionResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeProtectionResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeProtectionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeProtectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}