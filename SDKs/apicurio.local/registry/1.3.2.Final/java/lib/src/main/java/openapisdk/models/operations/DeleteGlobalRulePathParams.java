package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteGlobalRulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rule")
    public DeleteGlobalRuleRuleEnum rule;
    public DeleteGlobalRulePathParams withRule(DeleteGlobalRuleRuleEnum rule) {
        this.rule = rule;
        return this;
    }
}