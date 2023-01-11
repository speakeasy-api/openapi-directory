package openapisdk.models.shared;



public class DescribeFleetInstancesResult {
    public java.util.Map<String, Object> activeInstances;
    public DescribeFleetInstancesResult withActiveInstances(java.util.Map<String, Object> activeInstances) {
        this.activeInstances = activeInstances;
        return this;
    }
    public java.util.Map<String, Object> fleetId;
    public DescribeFleetInstancesResult withFleetId(java.util.Map<String, Object> fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    public java.util.Map<String, Object> nextToken;
    public DescribeFleetInstancesResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}