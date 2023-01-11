package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * GetModifyTrafficMirrorFilterRuleDestinationPortRange
 * Information about the Traffic Mirror filter rule port range.
**/
public class GetModifyTrafficMirrorFilterRuleDestinationPortRange {
    @SpeakeasyMetadata("queryParam:name=FromPort")
    public Long fromPort;
    public GetModifyTrafficMirrorFilterRuleDestinationPortRange withFromPort(Long fromPort) {
        this.fromPort = fromPort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=ToPort")
    public Long toPort;
    public GetModifyTrafficMirrorFilterRuleDestinationPortRange withToPort(Long toPort) {
        this.toPort = toPort;
        return this;
    }
}