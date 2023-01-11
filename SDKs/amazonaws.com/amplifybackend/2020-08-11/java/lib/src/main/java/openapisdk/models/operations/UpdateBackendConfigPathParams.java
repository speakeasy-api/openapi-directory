package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBackendConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public UpdateBackendConfigPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}