package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBackendEnvironmentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public ListBackendEnvironmentsPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}