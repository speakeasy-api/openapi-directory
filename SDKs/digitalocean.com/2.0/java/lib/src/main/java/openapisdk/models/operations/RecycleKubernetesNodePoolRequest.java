package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecycleKubernetesNodePoolRequest {
    public RecycleKubernetesNodePoolPathParams pathParams;
    public RecycleKubernetesNodePoolRequest withPathParams(RecycleKubernetesNodePoolPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public RecycleKubernetesNodePoolRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}