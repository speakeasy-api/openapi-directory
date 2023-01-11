package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRebootInstancesRequest {
    public PostRebootInstancesQueryParams queryParams;
    public PostRebootInstancesRequest withQueryParams(PostRebootInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRebootInstancesHeaders headers;
    public PostRebootInstancesRequest withHeaders(PostRebootInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRebootInstancesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}