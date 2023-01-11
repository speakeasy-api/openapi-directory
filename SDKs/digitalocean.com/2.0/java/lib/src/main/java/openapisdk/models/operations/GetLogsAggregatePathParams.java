package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLogsAggregatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app_id")
    public String appId;
    public GetLogsAggregatePathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deployment_id")
    public String deploymentId;
    public GetLogsAggregatePathParams withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
}