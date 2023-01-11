package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteInsightRulesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteInsightRulesActionEnum action;
    public GetDeleteInsightRulesQueryParams withAction(GetDeleteInsightRulesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RuleNames")
    public String[] ruleNames;
    public GetDeleteInsightRulesQueryParams withRuleNames(String[] ruleNames) {
        this.ruleNames = ruleNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteInsightRulesVersionEnum version;
    public GetDeleteInsightRulesQueryParams withVersion(GetDeleteInsightRulesVersionEnum version) {
        this.version = version;
        return this;
    }
}