package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReplicateKeyRequest {
    public ReplicateKeyHeaders headers;
    public ReplicateKeyRequest withHeaders(ReplicateKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReplicateKeyRequest request;
    public ReplicateKeyRequest withRequest(openapisdk.models.shared.ReplicateKeyRequest request) {
        this.request = request;
        return this;
    }
}