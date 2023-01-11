package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisassociateClientVpnTargetNetworkRequest {
    public PostDisassociateClientVpnTargetNetworkQueryParams queryParams;
    public PostDisassociateClientVpnTargetNetworkRequest withQueryParams(PostDisassociateClientVpnTargetNetworkQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDisassociateClientVpnTargetNetworkHeaders headers;
    public PostDisassociateClientVpnTargetNetworkRequest withHeaders(PostDisassociateClientVpnTargetNetworkHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDisassociateClientVpnTargetNetworkRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}