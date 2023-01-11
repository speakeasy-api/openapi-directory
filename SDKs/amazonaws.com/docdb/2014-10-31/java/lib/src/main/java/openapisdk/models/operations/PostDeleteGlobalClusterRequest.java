package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteGlobalClusterRequest {
    public PostDeleteGlobalClusterQueryParams queryParams;
    public PostDeleteGlobalClusterRequest withQueryParams(PostDeleteGlobalClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteGlobalClusterHeaders headers;
    public PostDeleteGlobalClusterRequest withHeaders(PostDeleteGlobalClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteGlobalClusterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}