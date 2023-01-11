package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * GetCreateTrafficMirrorFilterRuleSourcePortRange
 * Information about the Traffic Mirror filter rule port range.
**/
public class GetCreateTrafficMirrorFilterRuleSourcePortRange {
    @SpeakeasyMetadata("queryParam:name=FromPort")
    public Long fromPort;
    public GetCreateTrafficMirrorFilterRuleSourcePortRange withFromPort(Long fromPort) {
        this.fromPort = fromPort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=ToPort")
    public Long toPort;
    public GetCreateTrafficMirrorFilterRuleSourcePortRange withToPort(Long toPort) {
        this.toPort = toPort;
        return this;
    }
}