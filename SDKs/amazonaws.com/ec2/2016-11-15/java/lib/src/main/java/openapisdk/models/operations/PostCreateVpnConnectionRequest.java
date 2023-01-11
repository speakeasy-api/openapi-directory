package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateVpnConnectionRequest {
    public PostCreateVpnConnectionQueryParams queryParams;
    public PostCreateVpnConnectionRequest withQueryParams(PostCreateVpnConnectionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateVpnConnectionHeaders headers;
    public PostCreateVpnConnectionRequest withHeaders(PostCreateVpnConnectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateVpnConnectionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}