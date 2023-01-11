package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCancelDeploymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app_id")
    public String appId;
    public PostCancelDeploymentPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deployment_id")
    public String deploymentId;
    public PostCancelDeploymentPathParams withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
}