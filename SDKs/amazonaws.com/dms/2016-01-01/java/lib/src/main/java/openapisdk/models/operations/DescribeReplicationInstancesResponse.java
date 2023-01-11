package openapisdk.models.operations;



public class DescribeReplicationInstancesResponse {
    public String contentType;
    public DescribeReplicationInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeReplicationInstancesResponse describeReplicationInstancesResponse;
    public DescribeReplicationInstancesResponse withDescribeReplicationInstancesResponse(openapisdk.models.shared.DescribeReplicationInstancesResponse describeReplicationInstancesResponse) {
        this.describeReplicationInstancesResponse = describeReplicationInstancesResponse;
        return this;
    }
    public Object resourceNotFoundFault;
    public DescribeReplicationInstancesResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DescribeReplicationInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}