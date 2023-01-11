package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEnableInsightRulesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetEnableInsightRulesActionEnum action;
    public GetEnableInsightRulesQueryParams withAction(GetEnableInsightRulesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RuleNames")
    public String[] ruleNames;
    public GetEnableInsightRulesQueryParams withRuleNames(String[] ruleNames) {
        this.ruleNames = ruleNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetEnableInsightRulesVersionEnum version;
    public GetEnableInsightRulesQueryParams withVersion(GetEnableInsightRulesVersionEnum version) {
        this.version = version;
        return this;
    }
}