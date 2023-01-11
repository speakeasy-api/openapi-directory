package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteEnvironmentConfigurationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteEnvironmentConfigurationActionEnum action;
    public GetDeleteEnvironmentConfigurationQueryParams withAction(GetDeleteEnvironmentConfigurationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ApplicationName")
    public String applicationName;
    public GetDeleteEnvironmentConfigurationQueryParams withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EnvironmentName")
    public String environmentName;
    public GetDeleteEnvironmentConfigurationQueryParams withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteEnvironmentConfigurationVersionEnum version;
    public GetDeleteEnvironmentConfigurationQueryParams withVersion(GetDeleteEnvironmentConfigurationVersionEnum version) {
        this.version = version;
        return this;
    }
}