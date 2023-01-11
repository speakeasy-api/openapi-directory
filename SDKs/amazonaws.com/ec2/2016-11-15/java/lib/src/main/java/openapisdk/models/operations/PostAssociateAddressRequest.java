package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssociateAddressRequest {
    public PostAssociateAddressQueryParams queryParams;
    public PostAssociateAddressRequest withQueryParams(PostAssociateAddressQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAssociateAddressHeaders headers;
    public PostAssociateAddressRequest withHeaders(PostAssociateAddressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAssociateAddressRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}