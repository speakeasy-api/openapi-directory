package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DestroyKubernetesAssociatedResourcesSelectiveRequest {
    public DestroyKubernetesAssociatedResourcesSelectivePathParams pathParams;
    public DestroyKubernetesAssociatedResourcesSelectiveRequest withPathParams(DestroyKubernetesAssociatedResourcesSelectivePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DestroyKubernetesAssociatedResourcesSelectiveRequestBody request;
    public DestroyKubernetesAssociatedResourcesSelectiveRequest withRequest(DestroyKubernetesAssociatedResourcesSelectiveRequestBody request) {
        this.request = request;
        return this;
    }
}