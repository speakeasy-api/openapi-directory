package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateRouteTableRequest {
    public PostCreateRouteTableQueryParams queryParams;
    public PostCreateRouteTableRequest withQueryParams(PostCreateRouteTableQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateRouteTableHeaders headers;
    public PostCreateRouteTableRequest withHeaders(PostCreateRouteTableHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateRouteTableRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}