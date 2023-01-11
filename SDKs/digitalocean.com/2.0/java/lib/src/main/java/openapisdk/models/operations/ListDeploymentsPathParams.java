package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDeploymentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app_id")
    public String appId;
    public ListDeploymentsPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}