package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFailoverDbClusterRequest {
    public PostFailoverDbClusterQueryParams queryParams;
    public PostFailoverDbClusterRequest withQueryParams(PostFailoverDbClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostFailoverDbClusterHeaders headers;
    public PostFailoverDbClusterRequest withHeaders(PostFailoverDbClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostFailoverDbClusterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}