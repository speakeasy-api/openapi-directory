package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyTrafficMirrorFilterRuleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyTrafficMirrorFilterRuleActionEnum action;
    public PostModifyTrafficMirrorFilterRuleQueryParams withAction(PostModifyTrafficMirrorFilterRuleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyTrafficMirrorFilterRuleVersionEnum version;
    public PostModifyTrafficMirrorFilterRuleQueryParams withVersion(PostModifyTrafficMirrorFilterRuleVersionEnum version) {
        this.version = version;
        return this;
    }
}