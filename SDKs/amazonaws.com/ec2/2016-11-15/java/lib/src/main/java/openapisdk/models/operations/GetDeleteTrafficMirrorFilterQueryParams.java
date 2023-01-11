package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteTrafficMirrorFilterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteTrafficMirrorFilterActionEnum action;
    public GetDeleteTrafficMirrorFilterQueryParams withAction(GetDeleteTrafficMirrorFilterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteTrafficMirrorFilterQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TrafficMirrorFilterId")
    public String trafficMirrorFilterId;
    public GetDeleteTrafficMirrorFilterQueryParams withTrafficMirrorFilterId(String trafficMirrorFilterId) {
        this.trafficMirrorFilterId = trafficMirrorFilterId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteTrafficMirrorFilterVersionEnum version;
    public GetDeleteTrafficMirrorFilterQueryParams withVersion(GetDeleteTrafficMirrorFilterVersionEnum version) {
        this.version = version;
        return this;
    }
}