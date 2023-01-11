package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeprovisionByoipCidrRequest {
    public PostDeprovisionByoipCidrQueryParams queryParams;
    public PostDeprovisionByoipCidrRequest withQueryParams(PostDeprovisionByoipCidrQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeprovisionByoipCidrHeaders headers;
    public PostDeprovisionByoipCidrRequest withHeaders(PostDeprovisionByoipCidrHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeprovisionByoipCidrRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}