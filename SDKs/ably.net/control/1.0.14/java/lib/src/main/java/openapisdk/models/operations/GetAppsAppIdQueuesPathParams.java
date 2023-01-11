package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAppsAppIdQueuesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app_id")
    public String appId;
    public GetAppsAppIdQueuesPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}