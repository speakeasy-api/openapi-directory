package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateClusterRequest {
    public UpdateClusterHeaders headers;
    public UpdateClusterRequest withHeaders(UpdateClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateClusterRequest request;
    public UpdateClusterRequest withRequest(openapisdk.models.shared.UpdateClusterRequest request) {
        this.request = request;
        return this;
    }
}