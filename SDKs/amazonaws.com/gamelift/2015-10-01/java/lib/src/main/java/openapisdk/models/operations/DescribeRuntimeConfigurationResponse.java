package openapisdk.models.operations;



public class DescribeRuntimeConfigurationResponse {
    public String contentType;
    public DescribeRuntimeConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeRuntimeConfigurationOutput describeRuntimeConfigurationOutput;
    public DescribeRuntimeConfigurationResponse withDescribeRuntimeConfigurationOutput(openapisdk.models.shared.DescribeRuntimeConfigurationOutput describeRuntimeConfigurationOutput) {
        this.describeRuntimeConfigurationOutput = describeRuntimeConfigurationOutput;
        return this;
    }
    public Object internalServiceException;
    public DescribeRuntimeConfigurationResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeRuntimeConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public DescribeRuntimeConfigurationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeRuntimeConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DescribeRuntimeConfigurationResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}