package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteReceiptRuleSetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteReceiptRuleSetActionEnum action;
    public PostDeleteReceiptRuleSetQueryParams withAction(PostDeleteReceiptRuleSetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteReceiptRuleSetVersionEnum version;
    public PostDeleteReceiptRuleSetQueryParams withVersion(PostDeleteReceiptRuleSetVersionEnum version) {
        this.version = version;
        return this;
    }
}