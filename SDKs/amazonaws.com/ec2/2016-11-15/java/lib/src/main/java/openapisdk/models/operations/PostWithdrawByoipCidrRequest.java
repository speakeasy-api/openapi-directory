package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostWithdrawByoipCidrRequest {
    public PostWithdrawByoipCidrQueryParams queryParams;
    public PostWithdrawByoipCidrRequest withQueryParams(PostWithdrawByoipCidrQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostWithdrawByoipCidrHeaders headers;
    public PostWithdrawByoipCidrRequest withHeaders(PostWithdrawByoipCidrHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostWithdrawByoipCidrRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}