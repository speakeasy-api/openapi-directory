package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteClusterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ClusterArn")
    public String clusterArn;
    public DeleteClusterPathParams withClusterArn(String clusterArn) {
        this.clusterArn = clusterArn;
        return this;
    }
}