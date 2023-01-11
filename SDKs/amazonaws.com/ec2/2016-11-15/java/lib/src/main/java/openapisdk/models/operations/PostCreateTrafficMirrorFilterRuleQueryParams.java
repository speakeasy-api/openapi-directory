package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTrafficMirrorFilterRuleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateTrafficMirrorFilterRuleActionEnum action;
    public PostCreateTrafficMirrorFilterRuleQueryParams withAction(PostCreateTrafficMirrorFilterRuleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateTrafficMirrorFilterRuleVersionEnum version;
    public PostCreateTrafficMirrorFilterRuleQueryParams withVersion(PostCreateTrafficMirrorFilterRuleVersionEnum version) {
        this.version = version;
        return this;
    }
}