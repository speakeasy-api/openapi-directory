package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPauseClusterRequest {
    public PostPauseClusterQueryParams queryParams;
    public PostPauseClusterRequest withQueryParams(PostPauseClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostPauseClusterHeaders headers;
    public PostPauseClusterRequest withHeaders(PostPauseClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostPauseClusterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}