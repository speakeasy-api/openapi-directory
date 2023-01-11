package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGlobalRuleConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rule")
    public GetGlobalRuleConfigRuleEnum rule;
    public GetGlobalRuleConfigPathParams withRule(GetGlobalRuleConfigRuleEnum rule) {
        this.rule = rule;
        return this;
    }
}