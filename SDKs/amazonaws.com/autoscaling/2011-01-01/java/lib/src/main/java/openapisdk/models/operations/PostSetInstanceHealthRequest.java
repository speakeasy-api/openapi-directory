package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetInstanceHealthRequest {
    public PostSetInstanceHealthQueryParams queryParams;
    public PostSetInstanceHealthRequest withQueryParams(PostSetInstanceHealthQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSetInstanceHealthHeaders headers;
    public PostSetInstanceHealthRequest withHeaders(PostSetInstanceHealthHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSetInstanceHealthRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}