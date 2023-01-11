package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRunInstancesRequest {
    public PostRunInstancesQueryParams queryParams;
    public PostRunInstancesRequest withQueryParams(PostRunInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRunInstancesHeaders headers;
    public PostRunInstancesRequest withHeaders(PostRunInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRunInstancesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}