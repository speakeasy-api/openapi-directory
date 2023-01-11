package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAppsAppIdNamespacesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app_id")
    public String appId;
    public GetAppsAppIdNamespacesPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}