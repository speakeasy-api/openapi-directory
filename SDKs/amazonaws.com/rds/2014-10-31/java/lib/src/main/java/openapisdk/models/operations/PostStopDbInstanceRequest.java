package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStopDbInstanceRequest {
    public PostStopDbInstanceQueryParams queryParams;
    public PostStopDbInstanceRequest withQueryParams(PostStopDbInstanceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostStopDbInstanceHeaders headers;
    public PostStopDbInstanceRequest withHeaders(PostStopDbInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostStopDbInstanceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}