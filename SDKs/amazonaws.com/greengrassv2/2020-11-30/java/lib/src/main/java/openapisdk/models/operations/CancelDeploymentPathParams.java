package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelDeploymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deploymentId")
    public String deploymentId;
    public CancelDeploymentPathParams withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
}