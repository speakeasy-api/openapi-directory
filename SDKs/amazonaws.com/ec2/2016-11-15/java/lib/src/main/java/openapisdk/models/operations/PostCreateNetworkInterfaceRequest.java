package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateNetworkInterfaceRequest {
    public PostCreateNetworkInterfaceQueryParams queryParams;
    public PostCreateNetworkInterfaceRequest withQueryParams(PostCreateNetworkInterfaceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateNetworkInterfaceHeaders headers;
    public PostCreateNetworkInterfaceRequest withHeaders(PostCreateNetworkInterfaceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateNetworkInterfaceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}