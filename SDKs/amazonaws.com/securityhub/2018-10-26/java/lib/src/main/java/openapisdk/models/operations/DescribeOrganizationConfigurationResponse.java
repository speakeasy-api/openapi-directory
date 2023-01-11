package openapisdk.models.operations;



public class DescribeOrganizationConfigurationResponse {
    public String contentType;
    public DescribeOrganizationConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeOrganizationConfigurationResponse describeOrganizationConfigurationResponse;
    public DescribeOrganizationConfigurationResponse withDescribeOrganizationConfigurationResponse(openapisdk.models.shared.DescribeOrganizationConfigurationResponse describeOrganizationConfigurationResponse) {
        this.describeOrganizationConfigurationResponse = describeOrganizationConfigurationResponse;
        return this;
    }
    public Object internalException;
    public DescribeOrganizationConfigurationResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public DescribeOrganizationConfigurationResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public DescribeOrganizationConfigurationResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public DescribeOrganizationConfigurationResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public DescribeOrganizationConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}