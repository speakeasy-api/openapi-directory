package openapisdk.models.shared;



/**
 * ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange
 * The destination port range assigned to the Traffic Mirror rule.
**/
public class ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange {
    public java.util.Map<String, Object> fromPort;
    public ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange withFromPort(java.util.Map<String, Object> fromPort) {
        this.fromPort = fromPort;
        return this;
    }
    public java.util.Map<String, Object> toPort;
    public ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange withToPort(java.util.Map<String, Object> toPort) {
        this.toPort = toPort;
        return this;
    }
}