package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyCacheClusterRequest {
    public PostModifyCacheClusterQueryParams queryParams;
    public PostModifyCacheClusterRequest withQueryParams(PostModifyCacheClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyCacheClusterHeaders headers;
    public PostModifyCacheClusterRequest withHeaders(PostModifyCacheClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyCacheClusterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}