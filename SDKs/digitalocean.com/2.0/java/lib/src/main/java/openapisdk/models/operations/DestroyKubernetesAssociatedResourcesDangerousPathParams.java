package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DestroyKubernetesAssociatedResourcesDangerousPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cluster_id")
    public String clusterId;
    public DestroyKubernetesAssociatedResourcesDangerousPathParams withClusterId(String clusterId) {
        this.clusterId = clusterId;
        return this;
    }
}