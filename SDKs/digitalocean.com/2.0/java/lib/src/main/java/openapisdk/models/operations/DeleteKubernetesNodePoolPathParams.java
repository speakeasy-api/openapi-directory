package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteKubernetesNodePoolPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cluster_id")
    public String clusterId;
    public DeleteKubernetesNodePoolPathParams withClusterId(String clusterId) {
        this.clusterId = clusterId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_pool_id")
    public String nodePoolId;
    public DeleteKubernetesNodePoolPathParams withNodePoolId(String nodePoolId) {
        this.nodePoolId = nodePoolId;
        return this;
    }
}