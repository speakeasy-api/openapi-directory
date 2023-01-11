package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeletePlacementGroupRequest {
    public PostDeletePlacementGroupQueryParams queryParams;
    public PostDeletePlacementGroupRequest withQueryParams(PostDeletePlacementGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeletePlacementGroupHeaders headers;
    public PostDeletePlacementGroupRequest withHeaders(PostDeletePlacementGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeletePlacementGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}