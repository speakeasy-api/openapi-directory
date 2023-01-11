package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteDbInstanceRequest {
    public PostDeleteDbInstanceQueryParams queryParams;
    public PostDeleteDbInstanceRequest withQueryParams(PostDeleteDbInstanceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteDbInstanceHeaders headers;
    public PostDeleteDbInstanceRequest withHeaders(PostDeleteDbInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteDbInstanceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}