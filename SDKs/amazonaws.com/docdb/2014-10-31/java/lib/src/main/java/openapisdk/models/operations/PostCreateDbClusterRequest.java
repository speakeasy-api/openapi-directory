package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDbClusterRequest {
    public PostCreateDbClusterQueryParams queryParams;
    public PostCreateDbClusterRequest withQueryParams(PostCreateDbClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateDbClusterHeaders headers;
    public PostCreateDbClusterRequest withHeaders(PostCreateDbClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateDbClusterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}