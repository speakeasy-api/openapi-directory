package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeRankExpressionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeRankExpressionsActionEnum action;
    public PostDescribeRankExpressionsQueryParams withAction(PostDescribeRankExpressionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeRankExpressionsVersionEnum version;
    public PostDescribeRankExpressionsQueryParams withVersion(PostDescribeRankExpressionsVersionEnum version) {
        this.version = version;
        return this;
    }
}