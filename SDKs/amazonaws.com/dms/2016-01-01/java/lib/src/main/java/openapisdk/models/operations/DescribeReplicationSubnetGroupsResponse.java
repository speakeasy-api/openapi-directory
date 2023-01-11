package openapisdk.models.operations;



public class DescribeReplicationSubnetGroupsResponse {
    public String contentType;
    public DescribeReplicationSubnetGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeReplicationSubnetGroupsResponse describeReplicationSubnetGroupsResponse;
    public DescribeReplicationSubnetGroupsResponse withDescribeReplicationSubnetGroupsResponse(openapisdk.models.shared.DescribeReplicationSubnetGroupsResponse describeReplicationSubnetGroupsResponse) {
        this.describeReplicationSubnetGroupsResponse = describeReplicationSubnetGroupsResponse;
        return this;
    }
    public Object resourceNotFoundFault;
    public DescribeReplicationSubnetGroupsResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DescribeReplicationSubnetGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}