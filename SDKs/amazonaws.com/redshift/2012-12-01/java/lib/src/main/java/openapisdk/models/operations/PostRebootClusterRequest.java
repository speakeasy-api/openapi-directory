package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRebootClusterRequest {
    public PostRebootClusterQueryParams queryParams;
    public PostRebootClusterRequest withQueryParams(PostRebootClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRebootClusterHeaders headers;
    public PostRebootClusterRequest withHeaders(PostRebootClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRebootClusterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}