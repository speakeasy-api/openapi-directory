package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelClusterRequest {
    public CancelClusterHeaders headers;
    public CancelClusterRequest withHeaders(CancelClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CancelClusterRequest request;
    public CancelClusterRequest withRequest(openapisdk.models.shared.CancelClusterRequest request) {
        this.request = request;
        return this;
    }
}