package openapisdk.models.operations;



public class DescribeDefaultEncryptionConfigurationResponse {
    public String contentType;
    public DescribeDefaultEncryptionConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDefaultEncryptionConfigurationResponse describeDefaultEncryptionConfigurationResponse;
    public DescribeDefaultEncryptionConfigurationResponse withDescribeDefaultEncryptionConfigurationResponse(openapisdk.models.shared.DescribeDefaultEncryptionConfigurationResponse describeDefaultEncryptionConfigurationResponse) {
        this.describeDefaultEncryptionConfigurationResponse = describeDefaultEncryptionConfigurationResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeDefaultEncryptionConfigurationResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeDefaultEncryptionConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DescribeDefaultEncryptionConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeDefaultEncryptionConfigurationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}