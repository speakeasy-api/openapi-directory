package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDetachNetworkInterfaceRequest {
    public PostDetachNetworkInterfaceQueryParams queryParams;
    public PostDetachNetworkInterfaceRequest withQueryParams(PostDetachNetworkInterfaceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDetachNetworkInterfaceHeaders headers;
    public PostDetachNetworkInterfaceRequest withHeaders(PostDetachNetworkInterfaceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDetachNetworkInterfaceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}