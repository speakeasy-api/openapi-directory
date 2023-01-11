package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisableTopicRulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ruleName")
    public String ruleName;
    public DisableTopicRulePathParams withRuleName(String ruleName) {
        this.ruleName = ruleName;
        return this;
    }
}