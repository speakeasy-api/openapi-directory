package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetReceiptRulePositionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSetReceiptRulePositionActionEnum action;
    public PostSetReceiptRulePositionQueryParams withAction(PostSetReceiptRulePositionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSetReceiptRulePositionVersionEnum version;
    public PostSetReceiptRulePositionQueryParams withVersion(PostSetReceiptRulePositionVersionEnum version) {
        this.version = version;
        return this;
    }
}