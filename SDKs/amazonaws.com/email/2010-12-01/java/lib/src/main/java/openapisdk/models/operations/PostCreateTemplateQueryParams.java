package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateTemplateActionEnum action;
    public PostCreateTemplateQueryParams withAction(PostCreateTemplateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateTemplateVersionEnum version;
    public PostCreateTemplateQueryParams withVersion(PostCreateTemplateVersionEnum version) {
        this.version = version;
        return this;
    }
}