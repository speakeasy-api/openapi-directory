package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteIndexFieldRequest {
    public PostDeleteIndexFieldQueryParams queryParams;
    public PostDeleteIndexFieldRequest withQueryParams(PostDeleteIndexFieldQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteIndexFieldHeaders headers;
    public PostDeleteIndexFieldRequest withHeaders(PostDeleteIndexFieldHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteIndexFieldRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}