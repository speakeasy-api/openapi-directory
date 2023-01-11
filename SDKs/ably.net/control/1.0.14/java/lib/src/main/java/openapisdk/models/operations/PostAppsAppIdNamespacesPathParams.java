package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAppsAppIdNamespacesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app_id")
    public String appId;
    public PostAppsAppIdNamespacesPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}