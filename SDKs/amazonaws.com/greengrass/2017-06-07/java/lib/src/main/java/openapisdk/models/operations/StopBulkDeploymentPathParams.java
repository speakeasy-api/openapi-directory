package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopBulkDeploymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=BulkDeploymentId")
    public String bulkDeploymentId;
    public StopBulkDeploymentPathParams withBulkDeploymentId(String bulkDeploymentId) {
        this.bulkDeploymentId = bulkDeploymentId;
        return this;
    }
}