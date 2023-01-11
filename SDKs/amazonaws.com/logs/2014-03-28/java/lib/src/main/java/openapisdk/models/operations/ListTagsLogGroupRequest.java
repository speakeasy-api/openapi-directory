package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTagsLogGroupRequest {
    public ListTagsLogGroupHeaders headers;
    public ListTagsLogGroupRequest withHeaders(ListTagsLogGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListTagsLogGroupRequest request;
    public ListTagsLogGroupRequest withRequest(openapisdk.models.shared.ListTagsLogGroupRequest request) {
        this.request = request;
        return this;
    }
}