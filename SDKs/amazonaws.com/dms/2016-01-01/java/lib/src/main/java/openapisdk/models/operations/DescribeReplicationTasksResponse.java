package openapisdk.models.operations;



public class DescribeReplicationTasksResponse {
    public String contentType;
    public DescribeReplicationTasksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeReplicationTasksResponse describeReplicationTasksResponse;
    public DescribeReplicationTasksResponse withDescribeReplicationTasksResponse(openapisdk.models.shared.DescribeReplicationTasksResponse describeReplicationTasksResponse) {
        this.describeReplicationTasksResponse = describeReplicationTasksResponse;
        return this;
    }
    public Object resourceNotFoundFault;
    public DescribeReplicationTasksResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DescribeReplicationTasksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}