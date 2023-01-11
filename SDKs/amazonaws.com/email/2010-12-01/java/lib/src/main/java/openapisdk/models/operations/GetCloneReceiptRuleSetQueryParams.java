package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCloneReceiptRuleSetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCloneReceiptRuleSetActionEnum action;
    public GetCloneReceiptRuleSetQueryParams withAction(GetCloneReceiptRuleSetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OriginalRuleSetName")
    public String originalRuleSetName;
    public GetCloneReceiptRuleSetQueryParams withOriginalRuleSetName(String originalRuleSetName) {
        this.originalRuleSetName = originalRuleSetName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RuleSetName")
    public String ruleSetName;
    public GetCloneReceiptRuleSetQueryParams withRuleSetName(String ruleSetName) {
        this.ruleSetName = ruleSetName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCloneReceiptRuleSetVersionEnum version;
    public GetCloneReceiptRuleSetQueryParams withVersion(GetCloneReceiptRuleSetVersionEnum version) {
        this.version = version;
        return this;
    }
}