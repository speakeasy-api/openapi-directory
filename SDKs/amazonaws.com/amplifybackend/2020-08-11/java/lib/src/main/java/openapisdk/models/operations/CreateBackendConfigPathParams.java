package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBackendConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public CreateBackendConfigPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}