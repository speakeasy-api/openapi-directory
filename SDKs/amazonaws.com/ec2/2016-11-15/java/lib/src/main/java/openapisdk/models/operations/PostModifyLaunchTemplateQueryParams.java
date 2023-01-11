package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyLaunchTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyLaunchTemplateActionEnum action;
    public PostModifyLaunchTemplateQueryParams withAction(PostModifyLaunchTemplateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyLaunchTemplateVersionEnum version;
    public PostModifyLaunchTemplateQueryParams withVersion(PostModifyLaunchTemplateVersionEnum version) {
        this.version = version;
        return this;
    }
}