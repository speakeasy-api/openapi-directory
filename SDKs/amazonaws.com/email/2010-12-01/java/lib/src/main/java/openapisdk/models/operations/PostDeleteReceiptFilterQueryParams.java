package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteReceiptFilterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteReceiptFilterActionEnum action;
    public PostDeleteReceiptFilterQueryParams withAction(PostDeleteReceiptFilterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteReceiptFilterVersionEnum version;
    public PostDeleteReceiptFilterQueryParams withVersion(PostDeleteReceiptFilterVersionEnum version) {
        this.version = version;
        return this;
    }
}