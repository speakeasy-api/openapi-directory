package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateTemplateActionEnum action;
    public PostUpdateTemplateQueryParams withAction(PostUpdateTemplateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateTemplateVersionEnum version;
    public PostUpdateTemplateQueryParams withVersion(PostUpdateTemplateVersionEnum version) {
        this.version = version;
        return this;
    }
}