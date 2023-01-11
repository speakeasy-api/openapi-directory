package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteRouteTableRequest {
    public PostDeleteRouteTableQueryParams queryParams;
    public PostDeleteRouteTableRequest withQueryParams(PostDeleteRouteTableQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteRouteTableHeaders headers;
    public PostDeleteRouteTableRequest withHeaders(PostDeleteRouteTableHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteRouteTableRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}