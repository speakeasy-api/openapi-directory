package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * GetCreateTrafficMirrorFilterRuleDestinationPortRange
 * Information about the Traffic Mirror filter rule port range.
**/
public class GetCreateTrafficMirrorFilterRuleDestinationPortRange {
    @SpeakeasyMetadata("queryParam:name=FromPort")
    public Long fromPort;
    public GetCreateTrafficMirrorFilterRuleDestinationPortRange withFromPort(Long fromPort) {
        this.fromPort = fromPort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=ToPort")
    public Long toPort;
    public GetCreateTrafficMirrorFilterRuleDestinationPortRange withToPort(Long toPort) {
        this.toPort = toPort;
        return this;
    }
}