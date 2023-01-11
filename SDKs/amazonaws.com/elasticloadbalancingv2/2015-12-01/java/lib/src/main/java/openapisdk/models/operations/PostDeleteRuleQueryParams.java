package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteRuleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteRuleActionEnum action;
    public PostDeleteRuleQueryParams withAction(PostDeleteRuleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteRuleVersionEnum version;
    public PostDeleteRuleQueryParams withVersion(PostDeleteRuleVersionEnum version) {
        this.version = version;
        return this;
    }
}