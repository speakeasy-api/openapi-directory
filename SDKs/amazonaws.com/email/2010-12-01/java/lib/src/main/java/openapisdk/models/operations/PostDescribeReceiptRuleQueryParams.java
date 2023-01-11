package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeReceiptRuleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeReceiptRuleActionEnum action;
    public PostDescribeReceiptRuleQueryParams withAction(PostDescribeReceiptRuleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeReceiptRuleVersionEnum version;
    public PostDescribeReceiptRuleQueryParams withVersion(PostDescribeReceiptRuleVersionEnum version) {
        this.version = version;
        return this;
    }
}