package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBackendAuthPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public CreateBackendAuthPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}