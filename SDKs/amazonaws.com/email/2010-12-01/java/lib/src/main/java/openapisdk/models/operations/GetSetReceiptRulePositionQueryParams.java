package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetReceiptRulePositionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetSetReceiptRulePositionActionEnum action;
    public GetSetReceiptRulePositionQueryParams withAction(GetSetReceiptRulePositionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=After")
    public String after;
    public GetSetReceiptRulePositionQueryParams withAfter(String after) {
        this.after = after;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RuleName")
    public String ruleName;
    public GetSetReceiptRulePositionQueryParams withRuleName(String ruleName) {
        this.ruleName = ruleName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RuleSetName")
    public String ruleSetName;
    public GetSetReceiptRulePositionQueryParams withRuleSetName(String ruleSetName) {
        this.ruleSetName = ruleSetName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetSetReceiptRulePositionVersionEnum version;
    public GetSetReceiptRulePositionQueryParams withVersion(GetSetReceiptRulePositionVersionEnum version) {
        this.version = version;
        return this;
    }
}