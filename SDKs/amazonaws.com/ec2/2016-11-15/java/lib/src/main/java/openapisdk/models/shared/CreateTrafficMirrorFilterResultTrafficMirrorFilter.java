package openapisdk.models.shared;



/**
 * CreateTrafficMirrorFilterResultTrafficMirrorFilter
 * Information about the Traffic Mirror filter.
**/
public class CreateTrafficMirrorFilterResultTrafficMirrorFilter {
    public java.util.Map<String, Object> description;
    public CreateTrafficMirrorFilterResultTrafficMirrorFilter withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    public java.util.Map<String, Object> egressFilterRules;
    public CreateTrafficMirrorFilterResultTrafficMirrorFilter withEgressFilterRules(java.util.Map<String, Object> egressFilterRules) {
        this.egressFilterRules = egressFilterRules;
        return this;
    }
    public java.util.Map<String, Object> ingressFilterRules;
    public CreateTrafficMirrorFilterResultTrafficMirrorFilter withIngressFilterRules(java.util.Map<String, Object> ingressFilterRules) {
        this.ingressFilterRules = ingressFilterRules;
        return this;
    }
    public java.util.Map<String, Object> networkServices;
    public CreateTrafficMirrorFilterResultTrafficMirrorFilter withNetworkServices(java.util.Map<String, Object> networkServices) {
        this.networkServices = networkServices;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public CreateTrafficMirrorFilterResultTrafficMirrorFilter withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> trafficMirrorFilterId;
    public CreateTrafficMirrorFilterResultTrafficMirrorFilter withTrafficMirrorFilterId(java.util.Map<String, Object> trafficMirrorFilterId) {
        this.trafficMirrorFilterId = trafficMirrorFilterId;
        return this;
    }
}