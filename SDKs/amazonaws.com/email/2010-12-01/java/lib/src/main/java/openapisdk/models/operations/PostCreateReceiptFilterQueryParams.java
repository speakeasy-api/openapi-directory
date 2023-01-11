package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateReceiptFilterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateReceiptFilterActionEnum action;
    public PostCreateReceiptFilterQueryParams withAction(PostCreateReceiptFilterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateReceiptFilterVersionEnum version;
    public PostCreateReceiptFilterQueryParams withVersion(PostCreateReceiptFilterVersionEnum version) {
        this.version = version;
        return this;
    }
}