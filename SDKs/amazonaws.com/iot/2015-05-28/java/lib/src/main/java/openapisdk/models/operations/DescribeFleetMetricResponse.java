package openapisdk.models.operations;



public class DescribeFleetMetricResponse {
    public String contentType;
    public DescribeFleetMetricResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeFleetMetricResponse describeFleetMetricResponse;
    public DescribeFleetMetricResponse withDescribeFleetMetricResponse(openapisdk.models.shared.DescribeFleetMetricResponse describeFleetMetricResponse) {
        this.describeFleetMetricResponse = describeFleetMetricResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeFleetMetricResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeFleetMetricResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeFleetMetricResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeFleetMetricResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeFleetMetricResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeFleetMetricResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public DescribeFleetMetricResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}