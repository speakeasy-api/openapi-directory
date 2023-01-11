package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostApplySecurityGroupsToClientVpnTargetNetworkRequest {
    public PostApplySecurityGroupsToClientVpnTargetNetworkQueryParams queryParams;
    public PostApplySecurityGroupsToClientVpnTargetNetworkRequest withQueryParams(PostApplySecurityGroupsToClientVpnTargetNetworkQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostApplySecurityGroupsToClientVpnTargetNetworkHeaders headers;
    public PostApplySecurityGroupsToClientVpnTargetNetworkRequest withHeaders(PostApplySecurityGroupsToClientVpnTargetNetworkHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostApplySecurityGroupsToClientVpnTargetNetworkRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}