package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAppsAppIdKeysPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app_id")
    public String appId;
    public PostAppsAppIdKeysPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}