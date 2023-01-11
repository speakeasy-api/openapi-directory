package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateOrUpdateTagsRequest {
    public PostCreateOrUpdateTagsQueryParams queryParams;
    public PostCreateOrUpdateTagsRequest withQueryParams(PostCreateOrUpdateTagsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateOrUpdateTagsHeaders headers;
    public PostCreateOrUpdateTagsRequest withHeaders(PostCreateOrUpdateTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateOrUpdateTagsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}