package openapisdk.models.operations;



public class DescribeConnectionsResponse {
    public String contentType;
    public DescribeConnectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeConnectionsResponse describeConnectionsResponse;
    public DescribeConnectionsResponse withDescribeConnectionsResponse(openapisdk.models.shared.DescribeConnectionsResponse describeConnectionsResponse) {
        this.describeConnectionsResponse = describeConnectionsResponse;
        return this;
    }
    public Object resourceNotFoundFault;
    public DescribeConnectionsResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DescribeConnectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}