package openapisdk.models.operations;



public class DescribeLoggingConfigurationResponse {
    public String contentType;
    public DescribeLoggingConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeLoggingConfigurationResponse describeLoggingConfigurationResponse;
    public DescribeLoggingConfigurationResponse withDescribeLoggingConfigurationResponse(openapisdk.models.shared.DescribeLoggingConfigurationResponse describeLoggingConfigurationResponse) {
        this.describeLoggingConfigurationResponse = describeLoggingConfigurationResponse;
        return this;
    }
    public Object internalServerError;
    public DescribeLoggingConfigurationResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidRequestException;
    public DescribeLoggingConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeLoggingConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeLoggingConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeLoggingConfigurationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}