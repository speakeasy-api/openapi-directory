package openapisdk.models.operations;



public class DescribeReplicationConfigurationTemplatesResponse {
    public String contentType;
    public DescribeReplicationConfigurationTemplatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeReplicationConfigurationTemplatesResponse describeReplicationConfigurationTemplatesResponse;
    public DescribeReplicationConfigurationTemplatesResponse withDescribeReplicationConfigurationTemplatesResponse(openapisdk.models.shared.DescribeReplicationConfigurationTemplatesResponse describeReplicationConfigurationTemplatesResponse) {
        this.describeReplicationConfigurationTemplatesResponse = describeReplicationConfigurationTemplatesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeReplicationConfigurationTemplatesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeReplicationConfigurationTemplatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object uninitializedAccountException;
    public DescribeReplicationConfigurationTemplatesResponse withUninitializedAccountException(Object uninitializedAccountException) {
        this.uninitializedAccountException = uninitializedAccountException;
        return this;
    }
    public Object validationException;
    public DescribeReplicationConfigurationTemplatesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}