package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetSubnetsRequest {
    public PostSetSubnetsQueryParams queryParams;
    public PostSetSubnetsRequest withQueryParams(PostSetSubnetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSetSubnetsHeaders headers;
    public PostSetSubnetsRequest withHeaders(PostSetSubnetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSetSubnetsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}