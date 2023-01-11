package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTagsForResourceRequest {
    public ListTagsForResourceHeaders headers;
    public ListTagsForResourceRequest withHeaders(ListTagsForResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListTagsForResourceRequestBody request;
    public ListTagsForResourceRequest withRequest(ListTagsForResourceRequestBody request) {
        this.request = request;
        return this;
    }
}