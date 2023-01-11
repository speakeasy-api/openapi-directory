package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateReceiptRuleSetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateReceiptRuleSetActionEnum action;
    public PostCreateReceiptRuleSetQueryParams withAction(PostCreateReceiptRuleSetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateReceiptRuleSetVersionEnum version;
    public PostCreateReceiptRuleSetQueryParams withVersion(PostCreateReceiptRuleSetVersionEnum version) {
        this.version = version;
        return this;
    }
}