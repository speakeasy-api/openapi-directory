package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyRuleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyRuleActionEnum action;
    public PostModifyRuleQueryParams withAction(PostModifyRuleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyRuleVersionEnum version;
    public PostModifyRuleQueryParams withVersion(PostModifyRuleVersionEnum version) {
        this.version = version;
        return this;
    }
}