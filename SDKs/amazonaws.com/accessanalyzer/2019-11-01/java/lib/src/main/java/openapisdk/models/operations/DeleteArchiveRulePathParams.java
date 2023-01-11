package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteArchiveRulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=analyzerName")
    public String analyzerName;
    public DeleteArchiveRulePathParams withAnalyzerName(String analyzerName) {
        this.analyzerName = analyzerName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ruleName")
    public String ruleName;
    public DeleteArchiveRulePathParams withRuleName(String ruleName) {
        this.ruleName = ruleName;
        return this;
    }
}