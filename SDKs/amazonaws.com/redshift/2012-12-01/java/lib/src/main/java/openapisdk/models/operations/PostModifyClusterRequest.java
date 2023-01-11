package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyClusterRequest {
    public PostModifyClusterQueryParams queryParams;
    public PostModifyClusterRequest withQueryParams(PostModifyClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyClusterHeaders headers;
    public PostModifyClusterRequest withHeaders(PostModifyClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyClusterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}