package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteKubernetesClusterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cluster_id")
    public String clusterId;
    public DeleteKubernetesClusterPathParams withClusterId(String clusterId) {
        this.clusterId = clusterId;
        return this;
    }
}