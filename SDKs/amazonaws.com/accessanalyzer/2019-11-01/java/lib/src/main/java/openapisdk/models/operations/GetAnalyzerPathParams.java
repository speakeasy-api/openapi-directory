package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAnalyzerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=analyzerName")
    public String analyzerName;
    public GetAnalyzerPathParams withAnalyzerName(String analyzerName) {
        this.analyzerName = analyzerName;
        return this;
    }
}