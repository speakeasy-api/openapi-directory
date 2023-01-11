package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBackendEnvironmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public CreateBackendEnvironmentPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}