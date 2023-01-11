package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthorizeDataShareRequest {
    public PostAuthorizeDataShareQueryParams queryParams;
    public PostAuthorizeDataShareRequest withQueryParams(PostAuthorizeDataShareQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAuthorizeDataShareHeaders headers;
    public PostAuthorizeDataShareRequest withHeaders(PostAuthorizeDataShareHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAuthorizeDataShareRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}