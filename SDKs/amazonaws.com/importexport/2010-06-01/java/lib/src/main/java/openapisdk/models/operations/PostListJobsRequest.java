package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListJobsRequest {
    public PostListJobsQueryParams queryParams;
    public PostListJobsRequest withQueryParams(PostListJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListJobsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}