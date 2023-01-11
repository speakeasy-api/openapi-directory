package openapisdk.models.operations;



public class DescribeCustomMetricResponse {
    public String contentType;
    public DescribeCustomMetricResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeCustomMetricResponse describeCustomMetricResponse;
    public DescribeCustomMetricResponse withDescribeCustomMetricResponse(openapisdk.models.shared.DescribeCustomMetricResponse describeCustomMetricResponse) {
        this.describeCustomMetricResponse = describeCustomMetricResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeCustomMetricResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeCustomMetricResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeCustomMetricResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeCustomMetricResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeCustomMetricResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}