package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAppsAppIdQueuesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app_id")
    public String appId;
    public PostAppsAppIdQueuesPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}