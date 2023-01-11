package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FinalizeCutoverRequest {
    public FinalizeCutoverHeaders headers;
    public FinalizeCutoverRequest withHeaders(FinalizeCutoverHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public FinalizeCutoverRequestBody request;
    public FinalizeCutoverRequest withRequest(FinalizeCutoverRequestBody request) {
        this.request = request;
        return this;
    }
}