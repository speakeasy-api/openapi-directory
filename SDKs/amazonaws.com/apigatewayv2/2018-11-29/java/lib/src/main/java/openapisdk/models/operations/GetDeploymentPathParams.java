package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeploymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public GetDeploymentPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deploymentId")
    public String deploymentId;
    public GetDeploymentPathParams withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
}