package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSegmentRequest {
    public CreateSegmentPathParams pathParams;
    public CreateSegmentRequest withPathParams(CreateSegmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateSegmentHeaders headers;
    public CreateSegmentRequest withHeaders(CreateSegmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateSegmentRequestBody request;
    public CreateSegmentRequest withRequest(CreateSegmentRequestBody request) {
        this.request = request;
        return this;
    }
}