package openapisdk.models.shared;



public class DescribeTrafficMirrorTargetsResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeTrafficMirrorTargetsResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> trafficMirrorTargets;
    public DescribeTrafficMirrorTargetsResult withTrafficMirrorTargets(java.util.Map<String, Object> trafficMirrorTargets) {
        this.trafficMirrorTargets = trafficMirrorTargets;
        return this;
    }
}