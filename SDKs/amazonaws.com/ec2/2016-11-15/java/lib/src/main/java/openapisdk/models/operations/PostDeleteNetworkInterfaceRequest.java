package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteNetworkInterfaceRequest {
    public PostDeleteNetworkInterfaceQueryParams queryParams;
    public PostDeleteNetworkInterfaceRequest withQueryParams(PostDeleteNetworkInterfaceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteNetworkInterfaceHeaders headers;
    public PostDeleteNetworkInterfaceRequest withHeaders(PostDeleteNetworkInterfaceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteNetworkInterfaceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}