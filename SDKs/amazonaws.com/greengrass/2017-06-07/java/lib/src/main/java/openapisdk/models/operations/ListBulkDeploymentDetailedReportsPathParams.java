package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBulkDeploymentDetailedReportsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=BulkDeploymentId")
    public String bulkDeploymentId;
    public ListBulkDeploymentDetailedReportsPathParams withBulkDeploymentId(String bulkDeploymentId) {
        this.bulkDeploymentId = bulkDeploymentId;
        return this;
    }
}