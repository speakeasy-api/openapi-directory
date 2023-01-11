package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyTrafficMirrorSessionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyTrafficMirrorSessionActionEnum action;
    public GetModifyTrafficMirrorSessionQueryParams withAction(GetModifyTrafficMirrorSessionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Description")
    public String description;
    public GetModifyTrafficMirrorSessionQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetModifyTrafficMirrorSessionQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PacketLength")
    public Long packetLength;
    public GetModifyTrafficMirrorSessionQueryParams withPacketLength(Long packetLength) {
        this.packetLength = packetLength;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RemoveField")
    public openapisdk.models.shared.TrafficMirrorSessionFieldEnum[] removeField;
    public GetModifyTrafficMirrorSessionQueryParams withRemoveField(openapisdk.models.shared.TrafficMirrorSessionFieldEnum[] removeField) {
        this.removeField = removeField;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SessionNumber")
    public Long sessionNumber;
    public GetModifyTrafficMirrorSessionQueryParams withSessionNumber(Long sessionNumber) {
        this.sessionNumber = sessionNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TrafficMirrorFilterId")
    public String trafficMirrorFilterId;
    public GetModifyTrafficMirrorSessionQueryParams withTrafficMirrorFilterId(String trafficMirrorFilterId) {
        this.trafficMirrorFilterId = trafficMirrorFilterId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TrafficMirrorSessionId")
    public String trafficMirrorSessionId;
    public GetModifyTrafficMirrorSessionQueryParams withTrafficMirrorSessionId(String trafficMirrorSessionId) {
        this.trafficMirrorSessionId = trafficMirrorSessionId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TrafficMirrorTargetId")
    public String trafficMirrorTargetId;
    public GetModifyTrafficMirrorSessionQueryParams withTrafficMirrorTargetId(String trafficMirrorTargetId) {
        this.trafficMirrorTargetId = trafficMirrorTargetId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyTrafficMirrorSessionVersionEnum version;
    public GetModifyTrafficMirrorSessionQueryParams withVersion(GetModifyTrafficMirrorSessionVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VirtualNetworkId")
    public Long virtualNetworkId;
    public GetModifyTrafficMirrorSessionQueryParams withVirtualNetworkId(Long virtualNetworkId) {
        this.virtualNetworkId = virtualNetworkId;
        return this;
    }
}