package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAppPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public GetAppPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}