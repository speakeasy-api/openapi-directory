package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecycleKubernetesNodePoolPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cluster_id")
    public String clusterId;
    public RecycleKubernetesNodePoolPathParams withClusterId(String clusterId) {
        this.clusterId = clusterId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_pool_id")
    public String nodePoolId;
    public RecycleKubernetesNodePoolPathParams withNodePoolId(String nodePoolId) {
        this.nodePoolId = nodePoolId;
        return this;
    }
}