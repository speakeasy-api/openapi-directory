package openapisdk.models.shared;



/**
 * CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange
 * The source port range assigned to the Traffic Mirror rule.
**/
public class CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange {
    public java.util.Map<String, Object> fromPort;
    public CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange withFromPort(java.util.Map<String, Object> fromPort) {
        this.fromPort = fromPort;
        return this;
    }
    public java.util.Map<String, Object> toPort;
    public CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange withToPort(java.util.Map<String, Object> toPort) {
        this.toPort = toPort;
        return this;
    }
}