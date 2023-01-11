package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteReceiptRuleSetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteReceiptRuleSetActionEnum action;
    public GetDeleteReceiptRuleSetQueryParams withAction(GetDeleteReceiptRuleSetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RuleSetName")
    public String ruleSetName;
    public GetDeleteReceiptRuleSetQueryParams withRuleSetName(String ruleSetName) {
        this.ruleSetName = ruleSetName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteReceiptRuleSetVersionEnum version;
    public GetDeleteReceiptRuleSetQueryParams withVersion(GetDeleteReceiptRuleSetVersionEnum version) {
        this.version = version;
        return this;
    }
}