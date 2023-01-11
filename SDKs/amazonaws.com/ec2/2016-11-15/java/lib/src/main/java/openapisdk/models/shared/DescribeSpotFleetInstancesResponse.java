package openapisdk.models.shared;



/**
 * DescribeSpotFleetInstancesResponse
 * Contains the output of DescribeSpotFleetInstances.
**/
public class DescribeSpotFleetInstancesResponse {
    public java.util.Map<String, Object> activeInstances;
    public DescribeSpotFleetInstancesResponse withActiveInstances(java.util.Map<String, Object> activeInstances) {
        this.activeInstances = activeInstances;
        return this;
    }
    public java.util.Map<String, Object> nextToken;
    public DescribeSpotFleetInstancesResponse withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> spotFleetRequestId;
    public DescribeSpotFleetInstancesResponse withSpotFleetRequestId(java.util.Map<String, Object> spotFleetRequestId) {
        this.spotFleetRequestId = spotFleetRequestId;
        return this;
    }
}