package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateLaunchTemplateVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateLaunchTemplateVersionActionEnum action;
    public PostCreateLaunchTemplateVersionQueryParams withAction(PostCreateLaunchTemplateVersionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateLaunchTemplateVersionVersionEnum version;
    public PostCreateLaunchTemplateVersionQueryParams withVersion(PostCreateLaunchTemplateVersionVersionEnum version) {
        this.version = version;
        return this;
    }
}