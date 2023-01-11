package openapisdk.models.shared;



/**
 * ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange
 * The source port range assigned to the Traffic Mirror rule.
**/
public class ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange {
    public java.util.Map<String, Object> fromPort;
    public ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange withFromPort(java.util.Map<String, Object> fromPort) {
        this.fromPort = fromPort;
        return this;
    }
    public java.util.Map<String, Object> toPort;
    public ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange withToPort(java.util.Map<String, Object> toPort) {
        this.toPort = toPort;
        return this;
    }
}