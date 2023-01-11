package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeploymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app_id")
    public String appId;
    public CreateDeploymentPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}