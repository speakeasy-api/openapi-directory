package openapisdk.models.operations;



public class DescribeInstanceAccessControlAttributeConfigurationResponse {
    public Object accessDeniedException;
    public DescribeInstanceAccessControlAttributeConfigurationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeInstanceAccessControlAttributeConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeInstanceAccessControlAttributeConfigurationResponse describeInstanceAccessControlAttributeConfigurationResponse;
    public DescribeInstanceAccessControlAttributeConfigurationResponse withDescribeInstanceAccessControlAttributeConfigurationResponse(openapisdk.models.shared.DescribeInstanceAccessControlAttributeConfigurationResponse describeInstanceAccessControlAttributeConfigurationResponse) {
        this.describeInstanceAccessControlAttributeConfigurationResponse = describeInstanceAccessControlAttributeConfigurationResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeInstanceAccessControlAttributeConfigurationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeInstanceAccessControlAttributeConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeInstanceAccessControlAttributeConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeInstanceAccessControlAttributeConfigurationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeInstanceAccessControlAttributeConfigurationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}