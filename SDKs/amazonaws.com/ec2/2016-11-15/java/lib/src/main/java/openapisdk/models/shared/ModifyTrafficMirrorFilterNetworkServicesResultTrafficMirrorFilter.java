package openapisdk.models.shared;



/**
 * ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilter
 * The Traffic Mirror filter that the network service is associated with.
**/
public class ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilter {
    public java.util.Map<String, Object> description;
    public ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilter withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    public java.util.Map<String, Object> egressFilterRules;
    public ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilter withEgressFilterRules(java.util.Map<String, Object> egressFilterRules) {
        this.egressFilterRules = egressFilterRules;
        return this;
    }
    public java.util.Map<String, Object> ingressFilterRules;
    public ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilter withIngressFilterRules(java.util.Map<String, Object> ingressFilterRules) {
        this.ingressFilterRules = ingressFilterRules;
        return this;
    }
    public java.util.Map<String, Object> networkServices;
    public ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilter withNetworkServices(java.util.Map<String, Object> networkServices) {
        this.networkServices = networkServices;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilter withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> trafficMirrorFilterId;
    public ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilter withTrafficMirrorFilterId(java.util.Map<String, Object> trafficMirrorFilterId) {
        this.trafficMirrorFilterId = trafficMirrorFilterId;
        return this;
    }
}