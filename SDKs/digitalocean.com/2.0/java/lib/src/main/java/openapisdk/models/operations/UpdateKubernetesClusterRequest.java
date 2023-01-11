package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateKubernetesClusterRequest {
    public UpdateKubernetesClusterPathParams pathParams;
    public UpdateKubernetesClusterRequest withPathParams(UpdateKubernetesClusterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateKubernetesClusterRequestBodyInput request;
    public UpdateKubernetesClusterRequest withRequest(UpdateKubernetesClusterRequestBodyInput request) {
        this.request = request;
        return this;
    }
}