package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteKubernetesNodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cluster_id")
    public String clusterId;
    public DeleteKubernetesNodePathParams withClusterId(String clusterId) {
        this.clusterId = clusterId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public DeleteKubernetesNodePathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_pool_id")
    public String nodePoolId;
    public DeleteKubernetesNodePathParams withNodePoolId(String nodePoolId) {
        this.nodePoolId = nodePoolId;
        return this;
    }
}