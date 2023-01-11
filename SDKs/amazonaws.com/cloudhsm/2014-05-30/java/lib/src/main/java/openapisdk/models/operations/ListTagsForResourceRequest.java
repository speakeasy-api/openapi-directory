package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTagsForResourceRequest {
    public ListTagsForResourceHeaders headers;
    public ListTagsForResourceRequest withHeaders(ListTagsForResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListTagsForResourceRequest request;
    public ListTagsForResourceRequest withRequest(openapisdk.models.shared.ListTagsForResourceRequest request) {
        this.request = request;
        return this;
    }
}