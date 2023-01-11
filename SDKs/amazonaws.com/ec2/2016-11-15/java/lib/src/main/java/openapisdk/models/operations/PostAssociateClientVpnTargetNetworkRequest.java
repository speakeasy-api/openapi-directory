package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssociateClientVpnTargetNetworkRequest {
    public PostAssociateClientVpnTargetNetworkQueryParams queryParams;
    public PostAssociateClientVpnTargetNetworkRequest withQueryParams(PostAssociateClientVpnTargetNetworkQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAssociateClientVpnTargetNetworkHeaders headers;
    public PostAssociateClientVpnTargetNetworkRequest withHeaders(PostAssociateClientVpnTargetNetworkHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAssociateClientVpnTargetNetworkRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}