package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteTrafficMirrorSessionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteTrafficMirrorSessionActionEnum action;
    public GetDeleteTrafficMirrorSessionQueryParams withAction(GetDeleteTrafficMirrorSessionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteTrafficMirrorSessionQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TrafficMirrorSessionId")
    public String trafficMirrorSessionId;
    public GetDeleteTrafficMirrorSessionQueryParams withTrafficMirrorSessionId(String trafficMirrorSessionId) {
        this.trafficMirrorSessionId = trafficMirrorSessionId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteTrafficMirrorSessionVersionEnum version;
    public GetDeleteTrafficMirrorSessionQueryParams withVersion(GetDeleteTrafficMirrorSessionVersionEnum version) {
        this.version = version;
        return this;
    }
}