package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateDefaultSearchFieldRequest {
    public PostUpdateDefaultSearchFieldQueryParams queryParams;
    public PostUpdateDefaultSearchFieldRequest withQueryParams(PostUpdateDefaultSearchFieldQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateDefaultSearchFieldHeaders headers;
    public PostUpdateDefaultSearchFieldRequest withHeaders(PostUpdateDefaultSearchFieldHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateDefaultSearchFieldRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}