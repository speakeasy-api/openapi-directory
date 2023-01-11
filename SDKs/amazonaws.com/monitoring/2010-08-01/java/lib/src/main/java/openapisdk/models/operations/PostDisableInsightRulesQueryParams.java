package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisableInsightRulesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDisableInsightRulesActionEnum action;
    public PostDisableInsightRulesQueryParams withAction(PostDisableInsightRulesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDisableInsightRulesVersionEnum version;
    public PostDisableInsightRulesQueryParams withVersion(PostDisableInsightRulesVersionEnum version) {
        this.version = version;
        return this;
    }
}