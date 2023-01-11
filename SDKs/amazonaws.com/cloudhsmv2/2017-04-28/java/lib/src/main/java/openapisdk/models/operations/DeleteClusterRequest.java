package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteClusterRequest {
    public DeleteClusterHeaders headers;
    public DeleteClusterRequest withHeaders(DeleteClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteClusterRequest request;
    public DeleteClusterRequest withRequest(openapisdk.models.shared.DeleteClusterRequest request) {
        this.request = request;
        return this;
    }
}