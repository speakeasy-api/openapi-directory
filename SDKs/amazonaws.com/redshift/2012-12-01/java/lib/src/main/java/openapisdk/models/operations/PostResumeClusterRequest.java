package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResumeClusterRequest {
    public PostResumeClusterQueryParams queryParams;
    public PostResumeClusterRequest withQueryParams(PostResumeClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostResumeClusterHeaders headers;
    public PostResumeClusterRequest withHeaders(PostResumeClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostResumeClusterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}