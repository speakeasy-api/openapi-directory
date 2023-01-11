package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteReceiptRuleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteReceiptRuleActionEnum action;
    public GetDeleteReceiptRuleQueryParams withAction(GetDeleteReceiptRuleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RuleName")
    public String ruleName;
    public GetDeleteReceiptRuleQueryParams withRuleName(String ruleName) {
        this.ruleName = ruleName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RuleSetName")
    public String ruleSetName;
    public GetDeleteReceiptRuleQueryParams withRuleSetName(String ruleSetName) {
        this.ruleSetName = ruleSetName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteReceiptRuleVersionEnum version;
    public GetDeleteReceiptRuleQueryParams withVersion(GetDeleteReceiptRuleVersionEnum version) {
        this.version = version;
        return this;
    }
}