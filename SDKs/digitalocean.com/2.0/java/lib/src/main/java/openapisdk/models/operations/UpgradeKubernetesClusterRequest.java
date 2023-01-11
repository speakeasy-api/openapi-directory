package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpgradeKubernetesClusterRequest {
    public UpgradeKubernetesClusterPathParams pathParams;
    public UpgradeKubernetesClusterRequest withPathParams(UpgradeKubernetesClusterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public UpgradeKubernetesClusterRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}