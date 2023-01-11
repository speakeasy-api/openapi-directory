package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBacktrackDbClusterRequest {
    public PostBacktrackDbClusterQueryParams queryParams;
    public PostBacktrackDbClusterRequest withQueryParams(PostBacktrackDbClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostBacktrackDbClusterHeaders headers;
    public PostBacktrackDbClusterRequest withHeaders(PostBacktrackDbClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostBacktrackDbClusterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}