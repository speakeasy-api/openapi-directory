package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteLaunchConfigurationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteLaunchConfigurationActionEnum action;
    public PostDeleteLaunchConfigurationQueryParams withAction(PostDeleteLaunchConfigurationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteLaunchConfigurationVersionEnum version;
    public PostDeleteLaunchConfigurationQueryParams withVersion(PostDeleteLaunchConfigurationVersionEnum version) {
        this.version = version;
        return this;
    }
}