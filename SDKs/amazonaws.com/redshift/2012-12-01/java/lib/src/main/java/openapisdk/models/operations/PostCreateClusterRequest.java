package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateClusterRequest {
    public PostCreateClusterQueryParams queryParams;
    public PostCreateClusterRequest withQueryParams(PostCreateClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateClusterHeaders headers;
    public PostCreateClusterRequest withHeaders(PostCreateClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateClusterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}