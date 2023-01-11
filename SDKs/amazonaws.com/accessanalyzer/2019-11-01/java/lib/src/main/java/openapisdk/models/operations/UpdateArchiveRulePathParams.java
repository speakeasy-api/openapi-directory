package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateArchiveRulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=analyzerName")
    public String analyzerName;
    public UpdateArchiveRulePathParams withAnalyzerName(String analyzerName) {
        this.analyzerName = analyzerName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ruleName")
    public String ruleName;
    public UpdateArchiveRulePathParams withRuleName(String ruleName) {
        this.ruleName = ruleName;
        return this;
    }
}