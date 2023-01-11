package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteTrafficMirrorTargetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteTrafficMirrorTargetActionEnum action;
    public GetDeleteTrafficMirrorTargetQueryParams withAction(GetDeleteTrafficMirrorTargetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteTrafficMirrorTargetQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TrafficMirrorTargetId")
    public String trafficMirrorTargetId;
    public GetDeleteTrafficMirrorTargetQueryParams withTrafficMirrorTargetId(String trafficMirrorTargetId) {
        this.trafficMirrorTargetId = trafficMirrorTargetId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteTrafficMirrorTargetVersionEnum version;
    public GetDeleteTrafficMirrorTargetQueryParams withVersion(GetDeleteTrafficMirrorTargetVersionEnum version) {
        this.version = version;
        return this;
    }
}