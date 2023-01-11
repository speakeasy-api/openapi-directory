package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutEventStreamRequest {
    public PutEventStreamPathParams pathParams;
    public PutEventStreamRequest withPathParams(PutEventStreamPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutEventStreamHeaders headers;
    public PutEventStreamRequest withHeaders(PutEventStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutEventStreamRequestBody request;
    public PutEventStreamRequest withRequest(PutEventStreamRequestBody request) {
        this.request = request;
        return this;
    }
}