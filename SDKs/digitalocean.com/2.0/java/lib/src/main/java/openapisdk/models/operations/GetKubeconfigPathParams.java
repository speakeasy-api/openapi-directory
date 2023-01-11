package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetKubeconfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cluster_id")
    public String clusterId;
    public GetKubeconfigPathParams withClusterId(String clusterId) {
        this.clusterId = clusterId;
        return this;
    }
}