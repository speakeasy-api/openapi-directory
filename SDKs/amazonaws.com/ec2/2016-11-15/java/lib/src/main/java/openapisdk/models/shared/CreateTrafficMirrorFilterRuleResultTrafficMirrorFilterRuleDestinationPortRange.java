package openapisdk.models.shared;



/**
 * CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange
 * The destination port range assigned to the Traffic Mirror rule.
**/
public class CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange {
    public java.util.Map<String, Object> fromPort;
    public CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange withFromPort(java.util.Map<String, Object> fromPort) {
        this.fromPort = fromPort;
        return this;
    }
    public java.util.Map<String, Object> toPort;
    public CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange withToPort(java.util.Map<String, Object> toPort) {
        this.toPort = toPort;
        return this;
    }
}