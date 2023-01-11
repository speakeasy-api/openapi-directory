package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRemoveFromGlobalClusterRequest {
    public PostRemoveFromGlobalClusterQueryParams queryParams;
    public PostRemoveFromGlobalClusterRequest withQueryParams(PostRemoveFromGlobalClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRemoveFromGlobalClusterHeaders headers;
    public PostRemoveFromGlobalClusterRequest withHeaders(PostRemoveFromGlobalClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRemoveFromGlobalClusterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}