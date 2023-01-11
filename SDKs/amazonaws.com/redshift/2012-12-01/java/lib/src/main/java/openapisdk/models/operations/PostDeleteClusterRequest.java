package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteClusterRequest {
    public PostDeleteClusterQueryParams queryParams;
    public PostDeleteClusterRequest withQueryParams(PostDeleteClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteClusterHeaders headers;
    public PostDeleteClusterRequest withHeaders(PostDeleteClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteClusterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}