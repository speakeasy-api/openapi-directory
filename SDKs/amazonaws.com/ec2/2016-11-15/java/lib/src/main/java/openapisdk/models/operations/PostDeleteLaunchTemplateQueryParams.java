package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteLaunchTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteLaunchTemplateActionEnum action;
    public PostDeleteLaunchTemplateQueryParams withAction(PostDeleteLaunchTemplateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteLaunchTemplateVersionEnum version;
    public PostDeleteLaunchTemplateQueryParams withVersion(PostDeleteLaunchTemplateVersionEnum version) {
        this.version = version;
        return this;
    }
}