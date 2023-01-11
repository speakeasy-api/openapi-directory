package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRebootDbInstanceRequest {
    public PostRebootDbInstanceQueryParams queryParams;
    public PostRebootDbInstanceRequest withQueryParams(PostRebootDbInstanceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRebootDbInstanceHeaders headers;
    public PostRebootDbInstanceRequest withHeaders(PostRebootDbInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRebootDbInstanceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}