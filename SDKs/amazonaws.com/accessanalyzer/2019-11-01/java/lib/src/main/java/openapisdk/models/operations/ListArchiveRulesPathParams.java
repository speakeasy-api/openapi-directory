package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListArchiveRulesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=analyzerName")
    public String analyzerName;
    public ListArchiveRulesPathParams withAnalyzerName(String analyzerName) {
        this.analyzerName = analyzerName;
        return this;
    }
}