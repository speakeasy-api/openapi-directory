package openapisdk.models.operations;



public class DescribeScriptResponse {
    public String contentType;
    public DescribeScriptResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeScriptOutput describeScriptOutput;
    public DescribeScriptResponse withDescribeScriptOutput(openapisdk.models.shared.DescribeScriptOutput describeScriptOutput) {
        this.describeScriptOutput = describeScriptOutput;
        return this;
    }
    public Object internalServiceException;
    public DescribeScriptResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeScriptResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public DescribeScriptResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeScriptResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DescribeScriptResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}