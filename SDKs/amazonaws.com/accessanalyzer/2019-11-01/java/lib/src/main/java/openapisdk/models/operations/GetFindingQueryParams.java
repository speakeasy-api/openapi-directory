package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFindingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=analyzerArn")
    public String analyzerArn;
    public GetFindingQueryParams withAnalyzerArn(String analyzerArn) {
        this.analyzerArn = analyzerArn;
        return this;
    }
}