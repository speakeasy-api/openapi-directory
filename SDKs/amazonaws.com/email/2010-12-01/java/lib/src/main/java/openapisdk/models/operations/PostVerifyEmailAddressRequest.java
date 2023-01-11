package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostVerifyEmailAddressRequest {
    public PostVerifyEmailAddressQueryParams queryParams;
    public PostVerifyEmailAddressRequest withQueryParams(PostVerifyEmailAddressQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostVerifyEmailAddressHeaders headers;
    public PostVerifyEmailAddressRequest withHeaders(PostVerifyEmailAddressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostVerifyEmailAddressRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}