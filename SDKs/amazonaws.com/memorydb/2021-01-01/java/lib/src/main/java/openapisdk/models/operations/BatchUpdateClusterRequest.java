package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchUpdateClusterRequest {
    public BatchUpdateClusterHeaders headers;
    public BatchUpdateClusterRequest withHeaders(BatchUpdateClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchUpdateClusterRequest request;
    public BatchUpdateClusterRequest withRequest(openapisdk.models.shared.BatchUpdateClusterRequest request) {
        this.request = request;
        return this;
    }
}