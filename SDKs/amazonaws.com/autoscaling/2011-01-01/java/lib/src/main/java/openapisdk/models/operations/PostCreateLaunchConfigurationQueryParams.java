package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateLaunchConfigurationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateLaunchConfigurationActionEnum action;
    public PostCreateLaunchConfigurationQueryParams withAction(PostCreateLaunchConfigurationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateLaunchConfigurationVersionEnum version;
    public PostCreateLaunchConfigurationQueryParams withVersion(PostCreateLaunchConfigurationVersionEnum version) {
        this.version = version;
        return this;
    }
}