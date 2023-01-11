package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeploymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app_id")
    public String appId;
    public GetDeploymentPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deployment_id")
    public String deploymentId;
    public GetDeploymentPathParams withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
}