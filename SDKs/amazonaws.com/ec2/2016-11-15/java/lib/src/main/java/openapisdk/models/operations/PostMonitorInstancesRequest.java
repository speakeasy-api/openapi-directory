package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMonitorInstancesRequest {
    public PostMonitorInstancesQueryParams queryParams;
    public PostMonitorInstancesRequest withQueryParams(PostMonitorInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostMonitorInstancesHeaders headers;
    public PostMonitorInstancesRequest withHeaders(PostMonitorInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostMonitorInstancesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}