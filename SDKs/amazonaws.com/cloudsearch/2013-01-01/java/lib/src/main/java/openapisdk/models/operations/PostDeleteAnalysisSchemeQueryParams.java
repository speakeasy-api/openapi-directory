package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteAnalysisSchemeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteAnalysisSchemeActionEnum action;
    public PostDeleteAnalysisSchemeQueryParams withAction(PostDeleteAnalysisSchemeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteAnalysisSchemeVersionEnum version;
    public PostDeleteAnalysisSchemeQueryParams withVersion(PostDeleteAnalysisSchemeVersionEnum version) {
        this.version = version;
        return this;
    }
}