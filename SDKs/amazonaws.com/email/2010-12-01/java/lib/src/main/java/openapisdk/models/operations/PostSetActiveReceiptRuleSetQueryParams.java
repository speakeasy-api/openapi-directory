package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetActiveReceiptRuleSetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSetActiveReceiptRuleSetActionEnum action;
    public PostSetActiveReceiptRuleSetQueryParams withAction(PostSetActiveReceiptRuleSetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSetActiveReceiptRuleSetVersionEnum version;
    public PostSetActiveReceiptRuleSetQueryParams withVersion(PostSetActiveReceiptRuleSetVersionEnum version) {
        this.version = version;
        return this;
    }
}