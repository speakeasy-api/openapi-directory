package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAllocateAddressRequest {
    public PostAllocateAddressQueryParams queryParams;
    public PostAllocateAddressRequest withQueryParams(PostAllocateAddressQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAllocateAddressHeaders headers;
    public PostAllocateAddressRequest withHeaders(PostAllocateAddressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAllocateAddressRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}