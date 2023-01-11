package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteRouteRequest {
    public PostDeleteRouteQueryParams queryParams;
    public PostDeleteRouteRequest withQueryParams(PostDeleteRouteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteRouteHeaders headers;
    public PostDeleteRouteRequest withHeaders(PostDeleteRouteHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteRouteRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}