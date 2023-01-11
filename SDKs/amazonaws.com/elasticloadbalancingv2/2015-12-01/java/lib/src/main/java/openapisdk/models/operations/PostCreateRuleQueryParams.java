package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateRuleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateRuleActionEnum action;
    public PostCreateRuleQueryParams withAction(PostCreateRuleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateRuleVersionEnum version;
    public PostCreateRuleQueryParams withVersion(PostCreateRuleVersionEnum version) {
        this.version = version;
        return this;
    }
}