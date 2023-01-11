package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteTemplateActionEnum action;
    public PostDeleteTemplateQueryParams withAction(PostDeleteTemplateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteTemplateVersionEnum version;
    public PostDeleteTemplateQueryParams withVersion(PostDeleteTemplateVersionEnum version) {
        this.version = version;
        return this;
    }
}