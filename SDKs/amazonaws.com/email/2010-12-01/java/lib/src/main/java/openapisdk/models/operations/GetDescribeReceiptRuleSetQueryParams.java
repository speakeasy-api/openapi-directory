package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeReceiptRuleSetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeReceiptRuleSetActionEnum action;
    public GetDescribeReceiptRuleSetQueryParams withAction(GetDescribeReceiptRuleSetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RuleSetName")
    public String ruleSetName;
    public GetDescribeReceiptRuleSetQueryParams withRuleSetName(String ruleSetName) {
        this.ruleSetName = ruleSetName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeReceiptRuleSetVersionEnum version;
    public GetDescribeReceiptRuleSetQueryParams withVersion(GetDescribeReceiptRuleSetVersionEnum version) {
        this.version = version;
        return this;
    }
}