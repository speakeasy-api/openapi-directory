package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeploymentStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DeploymentId")
    public String deploymentId;
    public GetDeploymentStatusPathParams withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=GroupId")
    public String groupId;
    public GetDeploymentStatusPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}