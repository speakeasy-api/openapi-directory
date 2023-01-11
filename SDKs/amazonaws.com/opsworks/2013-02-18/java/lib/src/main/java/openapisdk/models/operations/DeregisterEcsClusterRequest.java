package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeregisterEcsClusterRequest {
    public DeregisterEcsClusterHeaders headers;
    public DeregisterEcsClusterRequest withHeaders(DeregisterEcsClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeregisterEcsClusterRequest request;
    public DeregisterEcsClusterRequest withRequest(openapisdk.models.shared.DeregisterEcsClusterRequest request) {
        this.request = request;
        return this;
    }
}