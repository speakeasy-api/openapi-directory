package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifyClusterRequest {
    public ModifyClusterHeaders headers;
    public ModifyClusterRequest withHeaders(ModifyClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifyClusterRequest request;
    public ModifyClusterRequest withRequest(openapisdk.models.shared.ModifyClusterRequest request) {
        this.request = request;
        return this;
    }
}