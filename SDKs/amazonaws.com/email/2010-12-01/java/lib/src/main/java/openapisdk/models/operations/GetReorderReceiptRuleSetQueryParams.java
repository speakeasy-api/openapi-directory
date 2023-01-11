package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReorderReceiptRuleSetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetReorderReceiptRuleSetActionEnum action;
    public GetReorderReceiptRuleSetQueryParams withAction(GetReorderReceiptRuleSetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RuleNames")
    public String[] ruleNames;
    public GetReorderReceiptRuleSetQueryParams withRuleNames(String[] ruleNames) {
        this.ruleNames = ruleNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RuleSetName")
    public String ruleSetName;
    public GetReorderReceiptRuleSetQueryParams withRuleSetName(String ruleSetName) {
        this.ruleSetName = ruleSetName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetReorderReceiptRuleSetVersionEnum version;
    public GetReorderReceiptRuleSetQueryParams withVersion(GetReorderReceiptRuleSetVersionEnum version) {
        this.version = version;
        return this;
    }
}