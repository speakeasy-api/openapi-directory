package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListLfTagsRequest {
    public ListLfTagsHeaders headers;
    public ListLfTagsRequest withHeaders(ListLfTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListLfTagsRequest request;
    public ListLfTagsRequest withRequest(openapisdk.models.shared.ListLfTagsRequest request) {
        this.request = request;
        return this;
    }
}