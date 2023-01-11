package openapisdk.models.operations;



public class DescribeMetricFiltersResponse {
    public String contentType;
    public DescribeMetricFiltersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeMetricFiltersResponse describeMetricFiltersResponse;
    public DescribeMetricFiltersResponse withDescribeMetricFiltersResponse(openapisdk.models.shared.DescribeMetricFiltersResponse describeMetricFiltersResponse) {
        this.describeMetricFiltersResponse = describeMetricFiltersResponse;
        return this;
    }
    public Object invalidParameterException;
    public DescribeMetricFiltersResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeMetricFiltersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeMetricFiltersResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeMetricFiltersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}