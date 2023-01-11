package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDefineAnalysisSchemeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDefineAnalysisSchemeActionEnum action;
    public PostDefineAnalysisSchemeQueryParams withAction(PostDefineAnalysisSchemeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDefineAnalysisSchemeVersionEnum version;
    public PostDefineAnalysisSchemeQueryParams withVersion(PostDefineAnalysisSchemeVersionEnum version) {
        this.version = version;
        return this;
    }
}