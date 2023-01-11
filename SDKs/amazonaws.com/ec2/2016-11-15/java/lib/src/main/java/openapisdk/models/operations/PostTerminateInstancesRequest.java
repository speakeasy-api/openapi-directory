package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTerminateInstancesRequest {
    public PostTerminateInstancesQueryParams queryParams;
    public PostTerminateInstancesRequest withQueryParams(PostTerminateInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostTerminateInstancesHeaders headers;
    public PostTerminateInstancesRequest withHeaders(PostTerminateInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostTerminateInstancesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}