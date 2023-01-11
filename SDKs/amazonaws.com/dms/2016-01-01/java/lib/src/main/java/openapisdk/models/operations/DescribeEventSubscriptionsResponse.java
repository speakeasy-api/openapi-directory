package openapisdk.models.operations;



public class DescribeEventSubscriptionsResponse {
    public String contentType;
    public DescribeEventSubscriptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeEventSubscriptionsResponse describeEventSubscriptionsResponse;
    public DescribeEventSubscriptionsResponse withDescribeEventSubscriptionsResponse(openapisdk.models.shared.DescribeEventSubscriptionsResponse describeEventSubscriptionsResponse) {
        this.describeEventSubscriptionsResponse = describeEventSubscriptionsResponse;
        return this;
    }
    public Object resourceNotFoundFault;
    public DescribeEventSubscriptionsResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DescribeEventSubscriptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}