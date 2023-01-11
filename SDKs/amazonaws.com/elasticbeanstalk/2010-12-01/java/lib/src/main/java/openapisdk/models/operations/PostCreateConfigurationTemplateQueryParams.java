package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateConfigurationTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateConfigurationTemplateActionEnum action;
    public PostCreateConfigurationTemplateQueryParams withAction(PostCreateConfigurationTemplateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateConfigurationTemplateVersionEnum version;
    public PostCreateConfigurationTemplateQueryParams withVersion(PostCreateConfigurationTemplateVersionEnum version) {
        this.version = version;
        return this;
    }
}