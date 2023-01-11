package openapisdk.models.shared;



public class CreateTrafficMirrorSessionResult {
    public java.util.Map<String, Object> clientToken;
    public CreateTrafficMirrorSessionResult withClientToken(java.util.Map<String, Object> clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    public CreateTrafficMirrorSessionResultTrafficMirrorSession trafficMirrorSession;
    public CreateTrafficMirrorSessionResult withTrafficMirrorSession(CreateTrafficMirrorSessionResultTrafficMirrorSession trafficMirrorSession) {
        this.trafficMirrorSession = trafficMirrorSession;
        return this;
    }
}