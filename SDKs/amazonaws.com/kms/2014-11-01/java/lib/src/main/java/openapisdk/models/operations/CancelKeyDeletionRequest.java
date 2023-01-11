package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelKeyDeletionRequest {
    public CancelKeyDeletionHeaders headers;
    public CancelKeyDeletionRequest withHeaders(CancelKeyDeletionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CancelKeyDeletionRequest request;
    public CancelKeyDeletionRequest withRequest(openapisdk.models.shared.CancelKeyDeletionRequest request) {
        this.request = request;
        return this;
    }
}