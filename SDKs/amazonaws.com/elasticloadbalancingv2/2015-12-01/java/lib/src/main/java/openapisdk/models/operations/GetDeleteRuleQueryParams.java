package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteRuleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteRuleActionEnum action;
    public GetDeleteRuleQueryParams withAction(GetDeleteRuleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RuleArn")
    public String ruleArn;
    public GetDeleteRuleQueryParams withRuleArn(String ruleArn) {
        this.ruleArn = ruleArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteRuleVersionEnum version;
    public GetDeleteRuleQueryParams withVersion(GetDeleteRuleVersionEnum version) {
        this.version = version;
        return this;
    }
}