package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteTrafficMirrorFilterRuleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteTrafficMirrorFilterRuleActionEnum action;
    public GetDeleteTrafficMirrorFilterRuleQueryParams withAction(GetDeleteTrafficMirrorFilterRuleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteTrafficMirrorFilterRuleQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TrafficMirrorFilterRuleId")
    public String trafficMirrorFilterRuleId;
    public GetDeleteTrafficMirrorFilterRuleQueryParams withTrafficMirrorFilterRuleId(String trafficMirrorFilterRuleId) {
        this.trafficMirrorFilterRuleId = trafficMirrorFilterRuleId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteTrafficMirrorFilterRuleVersionEnum version;
    public GetDeleteTrafficMirrorFilterRuleQueryParams withVersion(GetDeleteTrafficMirrorFilterRuleVersionEnum version) {
        this.version = version;
        return this;
    }
}