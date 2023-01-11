package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetTemplateActionEnum action;
    public PostGetTemplateQueryParams withAction(PostGetTemplateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetTemplateVersionEnum version;
    public PostGetTemplateQueryParams withVersion(PostGetTemplateVersionEnum version) {
        this.version = version;
        return this;
    }
}