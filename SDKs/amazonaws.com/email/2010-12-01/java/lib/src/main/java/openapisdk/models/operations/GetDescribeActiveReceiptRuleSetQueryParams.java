package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeActiveReceiptRuleSetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeActiveReceiptRuleSetActionEnum action;
    public GetDescribeActiveReceiptRuleSetQueryParams withAction(GetDescribeActiveReceiptRuleSetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeActiveReceiptRuleSetVersionEnum version;
    public GetDescribeActiveReceiptRuleSetQueryParams withVersion(GetDescribeActiveReceiptRuleSetVersionEnum version) {
        this.version = version;
        return this;
    }
}