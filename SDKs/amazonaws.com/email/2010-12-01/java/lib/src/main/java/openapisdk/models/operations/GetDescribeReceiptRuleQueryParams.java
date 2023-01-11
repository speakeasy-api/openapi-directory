package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeReceiptRuleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeReceiptRuleActionEnum action;
    public GetDescribeReceiptRuleQueryParams withAction(GetDescribeReceiptRuleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RuleName")
    public String ruleName;
    public GetDescribeReceiptRuleQueryParams withRuleName(String ruleName) {
        this.ruleName = ruleName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RuleSetName")
    public String ruleSetName;
    public GetDescribeReceiptRuleQueryParams withRuleSetName(String ruleSetName) {
        this.ruleSetName = ruleSetName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeReceiptRuleVersionEnum version;
    public GetDescribeReceiptRuleQueryParams withVersion(GetDescribeReceiptRuleVersionEnum version) {
        this.version = version;
        return this;
    }
}