package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateReceiptRuleSetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateReceiptRuleSetActionEnum action;
    public GetCreateReceiptRuleSetQueryParams withAction(GetCreateReceiptRuleSetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RuleSetName")
    public String ruleSetName;
    public GetCreateReceiptRuleSetQueryParams withRuleSetName(String ruleSetName) {
        this.ruleSetName = ruleSetName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateReceiptRuleSetVersionEnum version;
    public GetCreateReceiptRuleSetQueryParams withVersion(GetCreateReceiptRuleSetVersionEnum version) {
        this.version = version;
        return this;
    }
}