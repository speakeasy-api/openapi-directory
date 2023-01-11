package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteLaunchConfigurationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteLaunchConfigurationActionEnum action;
    public GetDeleteLaunchConfigurationQueryParams withAction(GetDeleteLaunchConfigurationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LaunchConfigurationName")
    public String launchConfigurationName;
    public GetDeleteLaunchConfigurationQueryParams withLaunchConfigurationName(String launchConfigurationName) {
        this.launchConfigurationName = launchConfigurationName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteLaunchConfigurationVersionEnum version;
    public GetDeleteLaunchConfigurationQueryParams withVersion(GetDeleteLaunchConfigurationVersionEnum version) {
        this.version = version;
        return this;
    }
}