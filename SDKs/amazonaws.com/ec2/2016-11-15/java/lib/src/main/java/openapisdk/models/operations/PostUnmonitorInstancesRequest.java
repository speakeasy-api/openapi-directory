package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUnmonitorInstancesRequest {
    public PostUnmonitorInstancesQueryParams queryParams;
    public PostUnmonitorInstancesRequest withQueryParams(PostUnmonitorInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUnmonitorInstancesHeaders headers;
    public PostUnmonitorInstancesRequest withHeaders(PostUnmonitorInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUnmonitorInstancesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}