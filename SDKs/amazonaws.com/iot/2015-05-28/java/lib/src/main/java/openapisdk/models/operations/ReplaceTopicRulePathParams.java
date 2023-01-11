package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReplaceTopicRulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ruleName")
    public String ruleName;
    public ReplaceTopicRulePathParams withRuleName(String ruleName) {
        this.ruleName = ruleName;
        return this;
    }
}