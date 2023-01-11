package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLogsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app_id")
    public String appId;
    public GetLogsPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=component_name")
    public String componentName;
    public GetLogsPathParams withComponentName(String componentName) {
        this.componentName = componentName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deployment_id")
    public String deploymentId;
    public GetLogsPathParams withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
}