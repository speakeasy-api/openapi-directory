package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateRouteRequest {
    public PostCreateRouteQueryParams queryParams;
    public PostCreateRouteRequest withQueryParams(PostCreateRouteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateRouteHeaders headers;
    public PostCreateRouteRequest withHeaders(PostCreateRouteHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateRouteRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}