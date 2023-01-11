package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBackendPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public GetBackendPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}