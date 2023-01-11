package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTerminateClientVpnConnectionsRequest {
    public PostTerminateClientVpnConnectionsQueryParams queryParams;
    public PostTerminateClientVpnConnectionsRequest withQueryParams(PostTerminateClientVpnConnectionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostTerminateClientVpnConnectionsHeaders headers;
    public PostTerminateClientVpnConnectionsRequest withHeaders(PostTerminateClientVpnConnectionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostTerminateClientVpnConnectionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}