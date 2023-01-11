package openapisdk.models.shared;



public class CreateTrafficMirrorFilterResult {
    public java.util.Map<String, Object> clientToken;
    public CreateTrafficMirrorFilterResult withClientToken(java.util.Map<String, Object> clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    public CreateTrafficMirrorFilterResultTrafficMirrorFilter trafficMirrorFilter;
    public CreateTrafficMirrorFilterResult withTrafficMirrorFilter(CreateTrafficMirrorFilterResultTrafficMirrorFilter trafficMirrorFilter) {
        this.trafficMirrorFilter = trafficMirrorFilter;
        return this;
    }
}