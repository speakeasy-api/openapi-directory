package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTopicRulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ruleName")
    public String ruleName;
    public CreateTopicRulePathParams withRuleName(String ruleName) {
        this.ruleName = ruleName;
        return this;
    }
}