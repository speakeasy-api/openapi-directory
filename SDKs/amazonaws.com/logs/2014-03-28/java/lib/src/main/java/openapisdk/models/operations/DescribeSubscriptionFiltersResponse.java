package openapisdk.models.operations;



public class DescribeSubscriptionFiltersResponse {
    public String contentType;
    public DescribeSubscriptionFiltersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeSubscriptionFiltersResponse describeSubscriptionFiltersResponse;
    public DescribeSubscriptionFiltersResponse withDescribeSubscriptionFiltersResponse(openapisdk.models.shared.DescribeSubscriptionFiltersResponse describeSubscriptionFiltersResponse) {
        this.describeSubscriptionFiltersResponse = describeSubscriptionFiltersResponse;
        return this;
    }
    public Object invalidParameterException;
    public DescribeSubscriptionFiltersResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeSubscriptionFiltersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeSubscriptionFiltersResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeSubscriptionFiltersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}