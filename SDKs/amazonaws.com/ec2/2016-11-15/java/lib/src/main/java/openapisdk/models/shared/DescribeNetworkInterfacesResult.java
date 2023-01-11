package openapisdk.models.shared;



/**
 * DescribeNetworkInterfacesResult
 * Contains the output of DescribeNetworkInterfaces.
**/
public class DescribeNetworkInterfacesResult {
    public java.util.Map<String, Object> networkInterfaces;
    public DescribeNetworkInterfacesResult withNetworkInterfaces(java.util.Map<String, Object> networkInterfaces) {
        this.networkInterfaces = networkInterfaces;
        return this;
    }
    public java.util.Map<String, Object> nextToken;
    public DescribeNetworkInterfacesResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}