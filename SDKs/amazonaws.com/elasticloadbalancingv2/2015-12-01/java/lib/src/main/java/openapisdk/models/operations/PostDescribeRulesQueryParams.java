package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeRulesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeRulesActionEnum action;
    public PostDescribeRulesQueryParams withAction(PostDescribeRulesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeRulesVersionEnum version;
    public PostDescribeRulesQueryParams withVersion(PostDescribeRulesVersionEnum version) {
        this.version = version;
        return this;
    }
}