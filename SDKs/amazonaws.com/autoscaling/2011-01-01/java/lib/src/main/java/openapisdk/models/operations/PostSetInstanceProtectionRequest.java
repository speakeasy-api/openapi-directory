package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetInstanceProtectionRequest {
    public PostSetInstanceProtectionQueryParams queryParams;
    public PostSetInstanceProtectionRequest withQueryParams(PostSetInstanceProtectionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSetInstanceProtectionHeaders headers;
    public PostSetInstanceProtectionRequest withHeaders(PostSetInstanceProtectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSetInstanceProtectionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}