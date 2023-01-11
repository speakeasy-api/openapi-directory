package openapisdk.models.operations;



public class DescribeOrganizationConfigurationResponse {
    public Object accessDeniedException;
    public DescribeOrganizationConfigurationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DescribeOrganizationConfigurationResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
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
    public Object internalServerException;
    public DescribeOrganizationConfigurationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeOrganizationConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DescribeOrganizationConfigurationResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DescribeOrganizationConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeOrganizationConfigurationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeOrganizationConfigurationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}