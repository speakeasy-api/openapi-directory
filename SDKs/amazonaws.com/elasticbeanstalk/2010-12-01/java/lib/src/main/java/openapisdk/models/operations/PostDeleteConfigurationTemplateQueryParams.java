package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteConfigurationTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteConfigurationTemplateActionEnum action;
    public PostDeleteConfigurationTemplateQueryParams withAction(PostDeleteConfigurationTemplateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteConfigurationTemplateVersionEnum version;
    public PostDeleteConfigurationTemplateQueryParams withVersion(PostDeleteConfigurationTemplateVersionEnum version) {
        this.version = version;
        return this;
    }
}