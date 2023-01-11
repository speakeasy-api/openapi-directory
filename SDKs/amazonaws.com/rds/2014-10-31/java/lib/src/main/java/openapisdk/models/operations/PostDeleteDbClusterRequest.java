package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteDbClusterRequest {
    public PostDeleteDbClusterQueryParams queryParams;
    public PostDeleteDbClusterRequest withQueryParams(PostDeleteDbClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteDbClusterHeaders headers;
    public PostDeleteDbClusterRequest withHeaders(PostDeleteDbClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteDbClusterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}