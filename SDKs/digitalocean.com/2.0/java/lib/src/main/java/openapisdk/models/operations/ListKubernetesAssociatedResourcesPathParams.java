package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListKubernetesAssociatedResourcesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cluster_id")
    public String clusterId;
    public ListKubernetesAssociatedResourcesPathParams withClusterId(String clusterId) {
        this.clusterId = clusterId;
        return this;
    }
}