package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAppsAppIdRulesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app_id")
    public String appId;
    public GetAppsAppIdRulesPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}