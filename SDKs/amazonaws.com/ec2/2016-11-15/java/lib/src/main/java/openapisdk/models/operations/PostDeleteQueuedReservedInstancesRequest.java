package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteQueuedReservedInstancesRequest {
    public PostDeleteQueuedReservedInstancesQueryParams queryParams;
    public PostDeleteQueuedReservedInstancesRequest withQueryParams(PostDeleteQueuedReservedInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteQueuedReservedInstancesHeaders headers;
    public PostDeleteQueuedReservedInstancesRequest withHeaders(PostDeleteQueuedReservedInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteQueuedReservedInstancesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}