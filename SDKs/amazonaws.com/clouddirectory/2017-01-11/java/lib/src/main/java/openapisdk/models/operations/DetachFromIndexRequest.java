package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetachFromIndexRequest {
    public DetachFromIndexHeaders headers;
    public DetachFromIndexRequest withHeaders(DetachFromIndexHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DetachFromIndexRequestBody request;
    public DetachFromIndexRequest withRequest(DetachFromIndexRequestBody request) {
        this.request = request;
        return this;
    }
}