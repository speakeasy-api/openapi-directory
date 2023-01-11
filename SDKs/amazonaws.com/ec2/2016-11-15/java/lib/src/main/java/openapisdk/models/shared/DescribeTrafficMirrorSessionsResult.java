package openapisdk.models.shared;



public class DescribeTrafficMirrorSessionsResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeTrafficMirrorSessionsResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> trafficMirrorSessions;
    public DescribeTrafficMirrorSessionsResult withTrafficMirrorSessions(java.util.Map<String, Object> trafficMirrorSessions) {
        this.trafficMirrorSessions = trafficMirrorSessions;
        return this;
    }
}