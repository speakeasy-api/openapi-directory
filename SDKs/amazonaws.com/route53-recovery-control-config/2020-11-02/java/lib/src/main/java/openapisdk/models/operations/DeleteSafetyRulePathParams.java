package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSafetyRulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SafetyRuleArn")
    public String safetyRuleArn;
    public DeleteSafetyRulePathParams withSafetyRuleArn(String safetyRuleArn) {
        this.safetyRuleArn = safetyRuleArn;
        return this;
    }
}