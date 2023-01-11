package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteInsightRulesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteInsightRulesActionEnum action;
    public PostDeleteInsightRulesQueryParams withAction(PostDeleteInsightRulesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteInsightRulesVersionEnum version;
    public PostDeleteInsightRulesQueryParams withVersion(PostDeleteInsightRulesVersionEnum version) {
        this.version = version;
        return this;
    }
}