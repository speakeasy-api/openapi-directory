package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGlobalRuleConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rule")
    public openapisdk.models.shared.RuleTypeEnum rule;
    public GetGlobalRuleConfigPathParams withRule(openapisdk.models.shared.RuleTypeEnum rule) {
        this.rule = rule;
        return this;
    }
}