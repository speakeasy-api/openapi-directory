package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateLaunchTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateLaunchTemplateActionEnum action;
    public PostCreateLaunchTemplateQueryParams withAction(PostCreateLaunchTemplateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateLaunchTemplateVersionEnum version;
    public PostCreateLaunchTemplateQueryParams withVersion(PostCreateLaunchTemplateVersionEnum version) {
        this.version = version;
        return this;
    }
}