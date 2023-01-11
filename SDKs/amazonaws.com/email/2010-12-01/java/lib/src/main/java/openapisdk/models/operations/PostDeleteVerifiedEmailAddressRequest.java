package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteVerifiedEmailAddressRequest {
    public PostDeleteVerifiedEmailAddressQueryParams queryParams;
    public PostDeleteVerifiedEmailAddressRequest withQueryParams(PostDeleteVerifiedEmailAddressQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteVerifiedEmailAddressHeaders headers;
    public PostDeleteVerifiedEmailAddressRequest withHeaders(PostDeleteVerifiedEmailAddressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteVerifiedEmailAddressRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}