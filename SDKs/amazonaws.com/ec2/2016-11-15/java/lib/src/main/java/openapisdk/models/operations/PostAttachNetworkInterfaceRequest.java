package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAttachNetworkInterfaceRequest {
    public PostAttachNetworkInterfaceQueryParams queryParams;
    public PostAttachNetworkInterfaceRequest withQueryParams(PostAttachNetworkInterfaceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAttachNetworkInterfaceHeaders headers;
    public PostAttachNetworkInterfaceRequest withHeaders(PostAttachNetworkInterfaceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAttachNetworkInterfaceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}