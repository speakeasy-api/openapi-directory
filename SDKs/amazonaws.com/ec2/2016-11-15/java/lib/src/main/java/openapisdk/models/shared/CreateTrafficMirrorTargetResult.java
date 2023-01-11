package openapisdk.models.shared;



public class CreateTrafficMirrorTargetResult {
    public java.util.Map<String, Object> clientToken;
    public CreateTrafficMirrorTargetResult withClientToken(java.util.Map<String, Object> clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    public CreateTrafficMirrorTargetResultTrafficMirrorTarget trafficMirrorTarget;
    public CreateTrafficMirrorTargetResult withTrafficMirrorTarget(CreateTrafficMirrorTargetResultTrafficMirrorTarget trafficMirrorTarget) {
        this.trafficMirrorTarget = trafficMirrorTarget;
        return this;
    }
}