package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeReceiptRuleSetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeReceiptRuleSetActionEnum action;
    public PostDescribeReceiptRuleSetQueryParams withAction(PostDescribeReceiptRuleSetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeReceiptRuleSetVersionEnum version;
    public PostDescribeReceiptRuleSetQueryParams withVersion(PostDescribeReceiptRuleSetVersionEnum version) {
        this.version = version;
        return this;
    }
}