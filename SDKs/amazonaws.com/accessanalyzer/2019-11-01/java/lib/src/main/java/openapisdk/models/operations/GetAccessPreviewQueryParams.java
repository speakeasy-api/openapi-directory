package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccessPreviewQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=analyzerArn")
    public String analyzerArn;
    public GetAccessPreviewQueryParams withAnalyzerArn(String analyzerArn) {
        this.analyzerArn = analyzerArn;
        return this;
    }
}