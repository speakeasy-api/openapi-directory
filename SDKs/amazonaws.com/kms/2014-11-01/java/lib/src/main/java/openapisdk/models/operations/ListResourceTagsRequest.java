package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListResourceTagsRequest {
    public ListResourceTagsHeaders headers;
    public ListResourceTagsRequest withHeaders(ListResourceTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListResourceTagsRequest request;
    public ListResourceTagsRequest withRequest(openapisdk.models.shared.ListResourceTagsRequest request) {
        this.request = request;
        return this;
    }
}