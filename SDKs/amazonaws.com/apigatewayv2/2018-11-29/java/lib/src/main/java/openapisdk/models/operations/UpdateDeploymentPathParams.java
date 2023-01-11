package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeploymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public UpdateDeploymentPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deploymentId")
    public String deploymentId;
    public UpdateDeploymentPathParams withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
}