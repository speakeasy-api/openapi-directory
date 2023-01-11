package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetObjectAttributesRequest {
    public GetObjectAttributesHeaders headers;
    public GetObjectAttributesRequest withHeaders(GetObjectAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetObjectAttributesRequestBody request;
    public GetObjectAttributesRequest withRequest(GetObjectAttributesRequestBody request) {
        this.request = request;
        return this;
    }
}