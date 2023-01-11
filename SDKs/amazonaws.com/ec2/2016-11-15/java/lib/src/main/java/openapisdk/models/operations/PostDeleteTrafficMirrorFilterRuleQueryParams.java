package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteTrafficMirrorFilterRuleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteTrafficMirrorFilterRuleActionEnum action;
    public PostDeleteTrafficMirrorFilterRuleQueryParams withAction(PostDeleteTrafficMirrorFilterRuleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteTrafficMirrorFilterRuleVersionEnum version;
    public PostDeleteTrafficMirrorFilterRuleQueryParams withVersion(PostDeleteTrafficMirrorFilterRuleVersionEnum version) {
        this.version = version;
        return this;
    }
}