package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteReceiptRuleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteReceiptRuleActionEnum action;
    public PostDeleteReceiptRuleQueryParams withAction(PostDeleteReceiptRuleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteReceiptRuleVersionEnum version;
    public PostDeleteReceiptRuleQueryParams withVersion(PostDeleteReceiptRuleVersionEnum version) {
        this.version = version;
        return this;
    }
}