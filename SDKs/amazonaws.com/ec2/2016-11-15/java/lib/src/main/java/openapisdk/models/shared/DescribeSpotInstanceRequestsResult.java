package openapisdk.models.shared;



/**
 * DescribeSpotInstanceRequestsResult
 * Contains the output of DescribeSpotInstanceRequests.
**/
public class DescribeSpotInstanceRequestsResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeSpotInstanceRequestsResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> spotInstanceRequests;
    public DescribeSpotInstanceRequestsResult withSpotInstanceRequests(java.util.Map<String, Object> spotInstanceRequests) {
        this.spotInstanceRequests = spotInstanceRequests;
        return this;
    }
}