package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGlobalRuleConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rule")
    public UpdateGlobalRuleConfigRuleEnum rule;
    public UpdateGlobalRuleConfigPathParams withRule(UpdateGlobalRuleConfigRuleEnum rule) {
        this.rule = rule;
        return this;
    }
}