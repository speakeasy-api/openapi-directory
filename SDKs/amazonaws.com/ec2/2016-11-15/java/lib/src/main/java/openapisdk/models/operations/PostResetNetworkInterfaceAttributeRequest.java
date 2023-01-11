package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResetNetworkInterfaceAttributeRequest {
    public PostResetNetworkInterfaceAttributeQueryParams queryParams;
    public PostResetNetworkInterfaceAttributeRequest withQueryParams(PostResetNetworkInterfaceAttributeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostResetNetworkInterfaceAttributeHeaders headers;
    public PostResetNetworkInterfaceAttributeRequest withHeaders(PostResetNetworkInterfaceAttributeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostResetNetworkInterfaceAttributeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}