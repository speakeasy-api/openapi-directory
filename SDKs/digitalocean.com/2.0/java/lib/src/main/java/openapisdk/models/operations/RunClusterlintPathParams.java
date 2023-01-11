package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunClusterlintPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cluster_id")
    public String clusterId;
    public RunClusterlintPathParams withClusterId(String clusterId) {
        this.clusterId = clusterId;
        return this;
    }
}