package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetLaunchTemplateDataQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetLaunchTemplateDataActionEnum action;
    public PostGetLaunchTemplateDataQueryParams withAction(PostGetLaunchTemplateDataActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetLaunchTemplateDataVersionEnum version;
    public PostGetLaunchTemplateDataQueryParams withVersion(PostGetLaunchTemplateDataVersionEnum version) {
        this.version = version;
        return this;
    }
}