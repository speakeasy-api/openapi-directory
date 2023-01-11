package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCloneReceiptRuleSetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCloneReceiptRuleSetActionEnum action;
    public PostCloneReceiptRuleSetQueryParams withAction(PostCloneReceiptRuleSetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCloneReceiptRuleSetVersionEnum version;
    public PostCloneReceiptRuleSetQueryParams withVersion(PostCloneReceiptRuleSetVersionEnum version) {
        this.version = version;
        return this;
    }
}