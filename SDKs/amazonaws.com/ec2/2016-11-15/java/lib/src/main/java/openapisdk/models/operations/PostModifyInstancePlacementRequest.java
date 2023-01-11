package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyInstancePlacementRequest {
    public PostModifyInstancePlacementQueryParams queryParams;
    public PostModifyInstancePlacementRequest withQueryParams(PostModifyInstancePlacementQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyInstancePlacementHeaders headers;
    public PostModifyInstancePlacementRequest withHeaders(PostModifyInstancePlacementHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyInstancePlacementRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}