package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTopicRulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ruleName")
    public String ruleName;
    public DeleteTopicRulePathParams withRuleName(String ruleName) {
        this.ruleName = ruleName;
        return this;
    }
}