package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDisableInsightRulesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDisableInsightRulesActionEnum action;
    public GetDisableInsightRulesQueryParams withAction(GetDisableInsightRulesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RuleNames")
    public String[] ruleNames;
    public GetDisableInsightRulesQueryParams withRuleNames(String[] ruleNames) {
        this.ruleNames = ruleNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDisableInsightRulesVersionEnum version;
    public GetDisableInsightRulesQueryParams withVersion(GetDisableInsightRulesVersionEnum version) {
        this.version = version;
        return this;
    }
}