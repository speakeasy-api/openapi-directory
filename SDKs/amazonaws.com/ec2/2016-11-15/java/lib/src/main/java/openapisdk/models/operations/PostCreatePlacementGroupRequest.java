package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreatePlacementGroupRequest {
    public PostCreatePlacementGroupQueryParams queryParams;
    public PostCreatePlacementGroupRequest withQueryParams(PostCreatePlacementGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreatePlacementGroupHeaders headers;
    public PostCreatePlacementGroupRequest withHeaders(PostCreatePlacementGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreatePlacementGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}