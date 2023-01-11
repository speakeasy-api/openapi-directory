package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFailoverGlobalClusterRequest {
    public PostFailoverGlobalClusterQueryParams queryParams;
    public PostFailoverGlobalClusterRequest withQueryParams(PostFailoverGlobalClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostFailoverGlobalClusterHeaders headers;
    public PostFailoverGlobalClusterRequest withHeaders(PostFailoverGlobalClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostFailoverGlobalClusterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}