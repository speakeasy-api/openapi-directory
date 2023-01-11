package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeActiveReceiptRuleSetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeActiveReceiptRuleSetActionEnum action;
    public PostDescribeActiveReceiptRuleSetQueryParams withAction(PostDescribeActiveReceiptRuleSetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeActiveReceiptRuleSetVersionEnum version;
    public PostDescribeActiveReceiptRuleSetQueryParams withVersion(PostDescribeActiveReceiptRuleSetVersionEnum version) {
        this.version = version;
        return this;
    }
}