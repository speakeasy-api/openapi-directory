package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateReceiptRuleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateReceiptRuleActionEnum action;
    public PostUpdateReceiptRuleQueryParams withAction(PostUpdateReceiptRuleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateReceiptRuleVersionEnum version;
    public PostUpdateReceiptRuleQueryParams withVersion(PostUpdateReceiptRuleVersionEnum version) {
        this.version = version;
        return this;
    }
}