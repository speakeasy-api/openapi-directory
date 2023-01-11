package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyGlobalClusterRequest {
    public PostModifyGlobalClusterQueryParams queryParams;
    public PostModifyGlobalClusterRequest withQueryParams(PostModifyGlobalClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyGlobalClusterHeaders headers;
    public PostModifyGlobalClusterRequest withHeaders(PostModifyGlobalClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyGlobalClusterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}