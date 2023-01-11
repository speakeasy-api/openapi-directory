package openapisdk.models.operations;



public class DescribeSubnetGroupsResponse {
    public String contentType;
    public DescribeSubnetGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeSubnetGroupsResponse describeSubnetGroupsResponse;
    public DescribeSubnetGroupsResponse withDescribeSubnetGroupsResponse(openapisdk.models.shared.DescribeSubnetGroupsResponse describeSubnetGroupsResponse) {
        this.describeSubnetGroupsResponse = describeSubnetGroupsResponse;
        return this;
    }
    public Object serviceLinkedRoleNotFoundFault;
    public DescribeSubnetGroupsResponse withServiceLinkedRoleNotFoundFault(Object serviceLinkedRoleNotFoundFault) {
        this.serviceLinkedRoleNotFoundFault = serviceLinkedRoleNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DescribeSubnetGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object subnetGroupNotFoundFault;
    public DescribeSubnetGroupsResponse withSubnetGroupNotFoundFault(Object subnetGroupNotFoundFault) {
        this.subnetGroupNotFoundFault = subnetGroupNotFoundFault;
        return this;
    }
}