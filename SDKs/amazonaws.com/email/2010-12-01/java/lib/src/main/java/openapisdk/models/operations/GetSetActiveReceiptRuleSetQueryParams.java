package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetActiveReceiptRuleSetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetSetActiveReceiptRuleSetActionEnum action;
    public GetSetActiveReceiptRuleSetQueryParams withAction(GetSetActiveReceiptRuleSetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RuleSetName")
    public String ruleSetName;
    public GetSetActiveReceiptRuleSetQueryParams withRuleSetName(String ruleSetName) {
        this.ruleSetName = ruleSetName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetSetActiveReceiptRuleSetVersionEnum version;
    public GetSetActiveReceiptRuleSetQueryParams withVersion(GetSetActiveReceiptRuleSetVersionEnum version) {
        this.version = version;
        return this;
    }
}