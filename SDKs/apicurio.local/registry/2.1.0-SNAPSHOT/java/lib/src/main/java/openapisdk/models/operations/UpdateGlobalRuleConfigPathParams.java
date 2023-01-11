package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGlobalRuleConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rule")
    public openapisdk.models.shared.RuleTypeEnum rule;
    public UpdateGlobalRuleConfigPathParams withRule(openapisdk.models.shared.RuleTypeEnum rule) {
        this.rule = rule;
        return this;
    }
}