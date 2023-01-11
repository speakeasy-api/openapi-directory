package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStopActivityStreamRequest {
    public PostStopActivityStreamQueryParams queryParams;
    public PostStopActivityStreamRequest withQueryParams(PostStopActivityStreamQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostStopActivityStreamHeaders headers;
    public PostStopActivityStreamRequest withHeaders(PostStopActivityStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostStopActivityStreamRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}