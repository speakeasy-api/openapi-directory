package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * GetModifyTrafficMirrorFilterRuleSourcePortRange
 * Information about the Traffic Mirror filter rule port range.
**/
public class GetModifyTrafficMirrorFilterRuleSourcePortRange {
    @SpeakeasyMetadata("queryParam:name=FromPort")
    public Long fromPort;
    public GetModifyTrafficMirrorFilterRuleSourcePortRange withFromPort(Long fromPort) {
        this.fromPort = fromPort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=ToPort")
    public Long toPort;
    public GetModifyTrafficMirrorFilterRuleSourcePortRange withToPort(Long toPort) {
        this.toPort = toPort;
        return this;
    }
}