package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteRankExpressionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteRankExpressionActionEnum action;
    public PostDeleteRankExpressionQueryParams withAction(PostDeleteRankExpressionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteRankExpressionVersionEnum version;
    public PostDeleteRankExpressionQueryParams withVersion(PostDeleteRankExpressionVersionEnum version) {
        this.version = version;
        return this;
    }
}