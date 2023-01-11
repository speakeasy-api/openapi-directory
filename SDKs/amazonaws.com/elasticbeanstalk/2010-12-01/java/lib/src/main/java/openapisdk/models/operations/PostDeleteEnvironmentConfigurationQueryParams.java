package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteEnvironmentConfigurationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteEnvironmentConfigurationActionEnum action;
    public PostDeleteEnvironmentConfigurationQueryParams withAction(PostDeleteEnvironmentConfigurationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteEnvironmentConfigurationVersionEnum version;
    public PostDeleteEnvironmentConfigurationQueryParams withVersion(PostDeleteEnvironmentConfigurationVersionEnum version) {
        this.version = version;
        return this;
    }
}