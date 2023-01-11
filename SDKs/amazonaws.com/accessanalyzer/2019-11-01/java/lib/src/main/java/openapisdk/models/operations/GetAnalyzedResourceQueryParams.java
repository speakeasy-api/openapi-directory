package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAnalyzedResourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=analyzerArn")
    public String analyzerArn;
    public GetAnalyzedResourceQueryParams withAnalyzerArn(String analyzerArn) {
        this.analyzerArn = analyzerArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resourceArn")
    public String resourceArn;
    public GetAnalyzedResourceQueryParams withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}