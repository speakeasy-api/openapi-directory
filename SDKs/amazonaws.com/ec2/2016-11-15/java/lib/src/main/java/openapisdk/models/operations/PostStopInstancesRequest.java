package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStopInstancesRequest {
    public PostStopInstancesQueryParams queryParams;
    public PostStopInstancesRequest withQueryParams(PostStopInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostStopInstancesHeaders headers;
    public PostStopInstancesRequest withHeaders(PostStopInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostStopInstancesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}