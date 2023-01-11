package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRunScheduledInstancesRequest {
    public PostRunScheduledInstancesQueryParams queryParams;
    public PostRunScheduledInstancesRequest withQueryParams(PostRunScheduledInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRunScheduledInstancesHeaders headers;
    public PostRunScheduledInstancesRequest withHeaders(PostRunScheduledInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRunScheduledInstancesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}