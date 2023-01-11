package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateKubernetesNodePoolRequest {
    public UpdateKubernetesNodePoolPathParams pathParams;
    public UpdateKubernetesNodePoolRequest withPathParams(UpdateKubernetesNodePoolPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateKubernetesNodePoolRequestBodyInput request;
    public UpdateKubernetesNodePoolRequest withRequest(UpdateKubernetesNodePoolRequestBodyInput request) {
        this.request = request;
        return this;
    }
}