package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBackendEnvironmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public GetBackendEnvironmentPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=environmentName")
    public String environmentName;
    public GetBackendEnvironmentPathParams withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
}