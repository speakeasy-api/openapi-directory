package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStartDbClusterRequest {
    public PostStartDbClusterQueryParams queryParams;
    public PostStartDbClusterRequest withQueryParams(PostStartDbClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostStartDbClusterHeaders headers;
    public PostStartDbClusterRequest withHeaders(PostStartDbClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostStartDbClusterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}