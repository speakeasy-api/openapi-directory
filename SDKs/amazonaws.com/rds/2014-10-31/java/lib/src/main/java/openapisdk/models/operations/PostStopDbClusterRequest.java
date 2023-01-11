package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStopDbClusterRequest {
    public PostStopDbClusterQueryParams queryParams;
    public PostStopDbClusterRequest withQueryParams(PostStopDbClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostStopDbClusterHeaders headers;
    public PostStopDbClusterRequest withHeaders(PostStopDbClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostStopDbClusterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}