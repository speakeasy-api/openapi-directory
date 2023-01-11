package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetClusterlintResultsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cluster_id")
    public String clusterId;
    public GetClusterlintResultsPathParams withClusterId(String clusterId) {
        this.clusterId = clusterId;
        return this;
    }
}