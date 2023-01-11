package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteExpressionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteExpressionActionEnum action;
    public PostDeleteExpressionQueryParams withAction(PostDeleteExpressionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteExpressionVersionEnum version;
    public PostDeleteExpressionQueryParams withVersion(PostDeleteExpressionVersionEnum version) {
        this.version = version;
        return this;
    }
}