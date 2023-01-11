package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRemoveClientIdFromOpenIdConnectProviderRequest {
    public PostRemoveClientIdFromOpenIdConnectProviderQueryParams queryParams;
    public PostRemoveClientIdFromOpenIdConnectProviderRequest withQueryParams(PostRemoveClientIdFromOpenIdConnectProviderQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRemoveClientIdFromOpenIdConnectProviderHeaders headers;
    public PostRemoveClientIdFromOpenIdConnectProviderRequest withHeaders(PostRemoveClientIdFromOpenIdConnectProviderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRemoveClientIdFromOpenIdConnectProviderRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}