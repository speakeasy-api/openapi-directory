package openapisdk.models.operations;



public class DescribeEventConfigurationsResponse {
    public String contentType;
    public DescribeEventConfigurationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeEventConfigurationsResponse describeEventConfigurationsResponse;
    public DescribeEventConfigurationsResponse withDescribeEventConfigurationsResponse(openapisdk.models.shared.DescribeEventConfigurationsResponse describeEventConfigurationsResponse) {
        this.describeEventConfigurationsResponse = describeEventConfigurationsResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeEventConfigurationsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Long statusCode;
    public DescribeEventConfigurationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeEventConfigurationsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}