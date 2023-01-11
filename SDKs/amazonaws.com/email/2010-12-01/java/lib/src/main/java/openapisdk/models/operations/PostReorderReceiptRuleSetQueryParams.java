package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReorderReceiptRuleSetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostReorderReceiptRuleSetActionEnum action;
    public PostReorderReceiptRuleSetQueryParams withAction(PostReorderReceiptRuleSetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostReorderReceiptRuleSetVersionEnum version;
    public PostReorderReceiptRuleSetQueryParams withVersion(PostReorderReceiptRuleSetVersionEnum version) {
        this.version = version;
        return this;
    }
}