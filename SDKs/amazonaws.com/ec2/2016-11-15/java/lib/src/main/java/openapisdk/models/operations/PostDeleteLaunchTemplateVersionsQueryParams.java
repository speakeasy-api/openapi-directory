package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteLaunchTemplateVersionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteLaunchTemplateVersionsActionEnum action;
    public PostDeleteLaunchTemplateVersionsQueryParams withAction(PostDeleteLaunchTemplateVersionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteLaunchTemplateVersionsVersionEnum version;
    public PostDeleteLaunchTemplateVersionsQueryParams withVersion(PostDeleteLaunchTemplateVersionsVersionEnum version) {
        this.version = version;
        return this;
    }
}