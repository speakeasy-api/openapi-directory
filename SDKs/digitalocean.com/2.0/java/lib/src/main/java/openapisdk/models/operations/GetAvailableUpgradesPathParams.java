package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAvailableUpgradesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cluster_id")
    public String clusterId;
    public GetAvailableUpgradesPathParams withClusterId(String clusterId) {
        this.clusterId = clusterId;
        return this;
    }
}