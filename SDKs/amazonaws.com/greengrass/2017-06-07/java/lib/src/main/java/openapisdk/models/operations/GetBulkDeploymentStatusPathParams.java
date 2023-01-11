package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBulkDeploymentStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=BulkDeploymentId")
    public String bulkDeploymentId;
    public GetBulkDeploymentStatusPathParams withBulkDeploymentId(String bulkDeploymentId) {
        this.bulkDeploymentId = bulkDeploymentId;
        return this;
    }
}