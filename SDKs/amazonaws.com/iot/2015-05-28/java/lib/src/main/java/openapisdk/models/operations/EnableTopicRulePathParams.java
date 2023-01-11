package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnableTopicRulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ruleName")
    public String ruleName;
    public EnableTopicRulePathParams withRuleName(String ruleName) {
        this.ruleName = ruleName;
        return this;
    }
}