package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAppPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public UpdateAppPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}