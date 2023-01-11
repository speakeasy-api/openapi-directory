package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveBackendConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public RemoveBackendConfigPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}