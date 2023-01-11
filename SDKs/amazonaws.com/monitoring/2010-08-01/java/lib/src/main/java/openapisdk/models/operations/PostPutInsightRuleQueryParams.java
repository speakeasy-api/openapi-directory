package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutInsightRuleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostPutInsightRuleActionEnum action;
    public PostPutInsightRuleQueryParams withAction(PostPutInsightRuleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostPutInsightRuleVersionEnum version;
    public PostPutInsightRuleQueryParams withVersion(PostPutInsightRuleVersionEnum version) {
        this.version = version;
        return this;
    }
}