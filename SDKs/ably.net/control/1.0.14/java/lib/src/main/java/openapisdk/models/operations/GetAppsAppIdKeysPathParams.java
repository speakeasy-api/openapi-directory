package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAppsAppIdKeysPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app_id")
    public String appId;
    public GetAppsAppIdKeysPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}