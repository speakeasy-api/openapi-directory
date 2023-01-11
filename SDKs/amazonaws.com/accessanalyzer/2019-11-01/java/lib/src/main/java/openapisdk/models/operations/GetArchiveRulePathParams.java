package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetArchiveRulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=analyzerName")
    public String analyzerName;
    public GetArchiveRulePathParams withAnalyzerName(String analyzerName) {
        this.analyzerName = analyzerName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ruleName")
    public String ruleName;
    public GetArchiveRulePathParams withRuleName(String ruleName) {
        this.ruleName = ruleName;
        return this;
    }
}