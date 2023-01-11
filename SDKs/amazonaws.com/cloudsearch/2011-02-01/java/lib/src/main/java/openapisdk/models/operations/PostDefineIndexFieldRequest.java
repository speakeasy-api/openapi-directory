package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDefineIndexFieldRequest {
    public PostDefineIndexFieldQueryParams queryParams;
    public PostDefineIndexFieldRequest withQueryParams(PostDefineIndexFieldQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDefineIndexFieldHeaders headers;
    public PostDefineIndexFieldRequest withHeaders(PostDefineIndexFieldHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDefineIndexFieldRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}