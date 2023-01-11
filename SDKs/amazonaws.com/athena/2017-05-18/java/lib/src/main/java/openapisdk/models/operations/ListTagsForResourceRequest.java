package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTagsForResourceRequest {
    public ListTagsForResourceQueryParams queryParams;
    public ListTagsForResourceRequest withQueryParams(ListTagsForResourceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTagsForResourceHeaders headers;
    public ListTagsForResourceRequest withHeaders(ListTagsForResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListTagsForResourceInput request;
    public ListTagsForResourceRequest withRequest(openapisdk.models.shared.ListTagsForResourceInput request) {
        this.request = request;
        return this;
    }
}