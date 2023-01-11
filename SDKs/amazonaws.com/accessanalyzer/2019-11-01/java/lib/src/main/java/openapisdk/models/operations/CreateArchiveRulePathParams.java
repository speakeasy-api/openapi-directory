package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateArchiveRulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=analyzerName")
    public String analyzerName;
    public CreateArchiveRulePathParams withAnalyzerName(String analyzerName) {
        this.analyzerName = analyzerName;
        return this;
    }
}