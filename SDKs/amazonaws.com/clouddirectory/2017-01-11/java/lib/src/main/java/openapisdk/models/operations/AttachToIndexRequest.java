package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AttachToIndexRequest {
    public AttachToIndexHeaders headers;
    public AttachToIndexRequest withHeaders(AttachToIndexHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AttachToIndexRequestBody request;
    public AttachToIndexRequest withRequest(AttachToIndexRequestBody request) {
        this.request = request;
        return this;
    }
}