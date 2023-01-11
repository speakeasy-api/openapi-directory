package openapisdk.models.operations;



public class DescribeAliasResponse {
    public String contentType;
    public DescribeAliasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAliasOutput describeAliasOutput;
    public DescribeAliasResponse withDescribeAliasOutput(openapisdk.models.shared.DescribeAliasOutput describeAliasOutput) {
        this.describeAliasOutput = describeAliasOutput;
        return this;
    }
    public Object internalServiceException;
    public DescribeAliasResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeAliasResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public DescribeAliasResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeAliasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DescribeAliasResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}