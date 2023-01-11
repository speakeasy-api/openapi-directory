package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTagsRequest {
    public ListTagsQueryParams queryParams;
    public ListTagsRequest withQueryParams(ListTagsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTagsHeaders headers;
    public ListTagsRequest withHeaders(ListTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListTagsRequest request;
    public ListTagsRequest withRequest(openapisdk.models.shared.ListTagsRequest request) {
        this.request = request;
        return this;
    }
}