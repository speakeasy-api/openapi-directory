package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRemoveTagsFromResourceRequest {
    public PostRemoveTagsFromResourceQueryParams queryParams;
    public PostRemoveTagsFromResourceRequest withQueryParams(PostRemoveTagsFromResourceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRemoveTagsFromResourceHeaders headers;
    public PostRemoveTagsFromResourceRequest withHeaders(PostRemoveTagsFromResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRemoveTagsFromResourceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}