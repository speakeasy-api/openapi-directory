package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReleaseAddressRequest {
    public PostReleaseAddressQueryParams queryParams;
    public PostReleaseAddressRequest withQueryParams(PostReleaseAddressQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostReleaseAddressHeaders headers;
    public PostReleaseAddressRequest withHeaders(PostReleaseAddressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostReleaseAddressRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}