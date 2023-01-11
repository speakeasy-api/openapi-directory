package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAdvertiseByoipCidrRequest {
    public PostAdvertiseByoipCidrQueryParams queryParams;
    public PostAdvertiseByoipCidrRequest withQueryParams(PostAdvertiseByoipCidrQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAdvertiseByoipCidrHeaders headers;
    public PostAdvertiseByoipCidrRequest withHeaders(PostAdvertiseByoipCidrHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAdvertiseByoipCidrRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}