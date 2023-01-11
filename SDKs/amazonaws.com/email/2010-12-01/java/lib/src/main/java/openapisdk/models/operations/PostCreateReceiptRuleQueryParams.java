package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateReceiptRuleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateReceiptRuleActionEnum action;
    public PostCreateReceiptRuleQueryParams withAction(PostCreateReceiptRuleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateReceiptRuleVersionEnum version;
    public PostCreateReceiptRuleQueryParams withVersion(PostCreateReceiptRuleVersionEnum version) {
        this.version = version;
        return this;
    }
}