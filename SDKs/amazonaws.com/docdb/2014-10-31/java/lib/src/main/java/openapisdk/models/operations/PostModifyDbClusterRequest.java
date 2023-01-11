package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyDbClusterRequest {
    public PostModifyDbClusterQueryParams queryParams;
    public PostModifyDbClusterRequest withQueryParams(PostModifyDbClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyDbClusterHeaders headers;
    public PostModifyDbClusterRequest withHeaders(PostModifyDbClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyDbClusterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}