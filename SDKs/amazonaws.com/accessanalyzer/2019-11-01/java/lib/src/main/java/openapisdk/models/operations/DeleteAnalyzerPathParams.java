package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAnalyzerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=analyzerName")
    public String analyzerName;
    public DeleteAnalyzerPathParams withAnalyzerName(String analyzerName) {
        this.analyzerName = analyzerName;
        return this;
    }
}