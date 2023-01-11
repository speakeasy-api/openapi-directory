package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateConfigurationTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateConfigurationTemplateActionEnum action;
    public PostUpdateConfigurationTemplateQueryParams withAction(PostUpdateConfigurationTemplateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateConfigurationTemplateVersionEnum version;
    public PostUpdateConfigurationTemplateQueryParams withVersion(PostUpdateConfigurationTemplateVersionEnum version) {
        this.version = version;
        return this;
    }
}