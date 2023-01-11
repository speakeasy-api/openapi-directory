package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetClusterUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cluster_id")
    public String clusterId;
    public GetClusterUserPathParams withClusterId(String clusterId) {
        this.clusterId = clusterId;
        return this;
    }
}