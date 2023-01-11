package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTagsForStreamRequest {
    public ListTagsForStreamHeaders headers;
    public ListTagsForStreamRequest withHeaders(ListTagsForStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListTagsForStreamInput request;
    public ListTagsForStreamRequest withRequest(openapisdk.models.shared.ListTagsForStreamInput request) {
        this.request = request;
        return this;
    }
}