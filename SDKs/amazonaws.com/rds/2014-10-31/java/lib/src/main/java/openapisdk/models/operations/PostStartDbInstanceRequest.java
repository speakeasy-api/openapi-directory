package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStartDbInstanceRequest {
    public PostStartDbInstanceQueryParams queryParams;
    public PostStartDbInstanceRequest withQueryParams(PostStartDbInstanceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostStartDbInstanceHeaders headers;
    public PostStartDbInstanceRequest withHeaders(PostStartDbInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostStartDbInstanceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}