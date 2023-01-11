package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTestRenderTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostTestRenderTemplateActionEnum action;
    public PostTestRenderTemplateQueryParams withAction(PostTestRenderTemplateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostTestRenderTemplateVersionEnum version;
    public PostTestRenderTemplateQueryParams withVersion(PostTestRenderTemplateVersionEnum version) {
        this.version = version;
        return this;
    }
}