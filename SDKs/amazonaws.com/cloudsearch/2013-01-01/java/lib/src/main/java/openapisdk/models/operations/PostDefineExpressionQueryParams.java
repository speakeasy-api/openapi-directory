package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDefineExpressionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDefineExpressionActionEnum action;
    public PostDefineExpressionQueryParams withAction(PostDefineExpressionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDefineExpressionVersionEnum version;
    public PostDefineExpressionQueryParams withVersion(PostDefineExpressionVersionEnum version) {
        this.version = version;
        return this;
    }
}