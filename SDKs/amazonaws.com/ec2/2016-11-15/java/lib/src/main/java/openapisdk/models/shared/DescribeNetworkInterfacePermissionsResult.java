package openapisdk.models.shared;



/**
 * DescribeNetworkInterfacePermissionsResult
 * Contains the output for DescribeNetworkInterfacePermissions.
**/
public class DescribeNetworkInterfacePermissionsResult {
    public java.util.Map<String, Object> networkInterfacePermissions;
    public DescribeNetworkInterfacePermissionsResult withNetworkInterfacePermissions(java.util.Map<String, Object> networkInterfacePermissions) {
        this.networkInterfacePermissions = networkInterfacePermissions;
        return this;
    }
    public java.util.Map<String, Object> nextToken;
    public DescribeNetworkInterfacePermissionsResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}