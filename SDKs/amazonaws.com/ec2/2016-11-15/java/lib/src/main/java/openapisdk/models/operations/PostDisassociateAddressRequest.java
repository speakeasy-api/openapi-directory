package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisassociateAddressRequest {
    public PostDisassociateAddressQueryParams queryParams;
    public PostDisassociateAddressRequest withQueryParams(PostDisassociateAddressQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDisassociateAddressHeaders headers;
    public PostDisassociateAddressRequest withHeaders(PostDisassociateAddressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDisassociateAddressRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}