package openapisdk.models.operations;



public class DescribeAccountAuditConfigurationResponse {
    public String contentType;
    public DescribeAccountAuditConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAccountAuditConfigurationResponse describeAccountAuditConfigurationResponse;
    public DescribeAccountAuditConfigurationResponse withDescribeAccountAuditConfigurationResponse(openapisdk.models.shared.DescribeAccountAuditConfigurationResponse describeAccountAuditConfigurationResponse) {
        this.describeAccountAuditConfigurationResponse = describeAccountAuditConfigurationResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeAccountAuditConfigurationResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Long statusCode;
    public DescribeAccountAuditConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeAccountAuditConfigurationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}