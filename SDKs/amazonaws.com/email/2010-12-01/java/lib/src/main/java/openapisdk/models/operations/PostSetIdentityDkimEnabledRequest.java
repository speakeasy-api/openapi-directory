package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetIdentityDkimEnabledRequest {
    public PostSetIdentityDkimEnabledQueryParams queryParams;
    public PostSetIdentityDkimEnabledRequest withQueryParams(PostSetIdentityDkimEnabledQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSetIdentityDkimEnabledHeaders headers;
    public PostSetIdentityDkimEnabledRequest withHeaders(PostSetIdentityDkimEnabledHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSetIdentityDkimEnabledRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}