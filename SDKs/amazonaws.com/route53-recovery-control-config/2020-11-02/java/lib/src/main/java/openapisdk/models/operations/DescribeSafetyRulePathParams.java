package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeSafetyRulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SafetyRuleArn")
    public String safetyRuleArn;
    public DescribeSafetyRulePathParams withSafetyRuleArn(String safetyRuleArn) {
        this.safetyRuleArn = safetyRuleArn;
        return this;
    }
}