package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyNetworkInterfaceAttributeRequest {
    public PostModifyNetworkInterfaceAttributeQueryParams queryParams;
    public PostModifyNetworkInterfaceAttributeRequest withQueryParams(PostModifyNetworkInterfaceAttributeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyNetworkInterfaceAttributeHeaders headers;
    public PostModifyNetworkInterfaceAttributeRequest withHeaders(PostModifyNetworkInterfaceAttributeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyNetworkInterfaceAttributeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}