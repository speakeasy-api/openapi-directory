package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteGlobalRulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rule")
    public openapisdk.models.shared.RuleTypeEnum rule;
    public DeleteGlobalRulePathParams withRule(openapisdk.models.shared.RuleTypeEnum rule) {
        this.rule = rule;
        return this;
    }
}