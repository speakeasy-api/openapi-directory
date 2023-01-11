package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDefineRankExpressionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDefineRankExpressionActionEnum action;
    public PostDefineRankExpressionQueryParams withAction(PostDefineRankExpressionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDefineRankExpressionVersionEnum version;
    public PostDefineRankExpressionQueryParams withVersion(PostDefineRankExpressionVersionEnum version) {
        this.version = version;
        return this;
    }
}