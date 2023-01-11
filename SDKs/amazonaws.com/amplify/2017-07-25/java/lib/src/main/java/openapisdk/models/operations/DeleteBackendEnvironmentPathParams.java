package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBackendEnvironmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public DeleteBackendEnvironmentPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=environmentName")
    public String environmentName;
    public DeleteBackendEnvironmentPathParams withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
}