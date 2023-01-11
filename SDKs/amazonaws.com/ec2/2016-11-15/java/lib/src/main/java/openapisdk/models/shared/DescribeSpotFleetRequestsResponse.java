package openapisdk.models.shared;



/**
 * DescribeSpotFleetRequestsResponse
 * Contains the output of DescribeSpotFleetRequests.
**/
public class DescribeSpotFleetRequestsResponse {
    public java.util.Map<String, Object> nextToken;
    public DescribeSpotFleetRequestsResponse withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> spotFleetRequestConfigs;
    public DescribeSpotFleetRequestsResponse withSpotFleetRequestConfigs(java.util.Map<String, Object> spotFleetRequestConfigs) {
        this.spotFleetRequestConfigs = spotFleetRequestConfigs;
        return this;
    }
}