package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRemoveTagsRequest {
    public PostRemoveTagsQueryParams queryParams;
    public PostRemoveTagsRequest withQueryParams(PostRemoveTagsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRemoveTagsHeaders headers;
    public PostRemoveTagsRequest withHeaders(PostRemoveTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRemoveTagsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}