package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableInsightRulesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostEnableInsightRulesActionEnum action;
    public PostEnableInsightRulesQueryParams withAction(PostEnableInsightRulesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostEnableInsightRulesVersionEnum version;
    public PostEnableInsightRulesQueryParams withVersion(PostEnableInsightRulesVersionEnum version) {
        this.version = version;
        return this;
    }
}