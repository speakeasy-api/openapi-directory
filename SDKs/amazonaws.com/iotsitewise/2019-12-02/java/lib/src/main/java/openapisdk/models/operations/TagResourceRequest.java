package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagResourceRequest {
    public TagResourceQueryParams queryParams;
    public TagResourceRequest withQueryParams(TagResourceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TagResourceHeaders headers;
    public TagResourceRequest withHeaders(TagResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TagResourceRequestBody request;
    public TagResourceRequest withRequest(TagResourceRequestBody request) {
        this.request = request;
        return this;
    }
}