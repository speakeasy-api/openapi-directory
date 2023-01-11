package openapisdk.models.operations;



public class DescribeEndpointsResponse {
    public String contentType;
    public DescribeEndpointsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeEndpointsResponse describeEndpointsResponse;
    public DescribeEndpointsResponse withDescribeEndpointsResponse(openapisdk.models.shared.DescribeEndpointsResponse describeEndpointsResponse) {
        this.describeEndpointsResponse = describeEndpointsResponse;
        return this;
    }
    public Object resourceNotFoundFault;
    public DescribeEndpointsResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DescribeEndpointsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}