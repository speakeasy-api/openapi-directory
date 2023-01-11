package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyDbInstanceRequest {
    public PostModifyDbInstanceQueryParams queryParams;
    public PostModifyDbInstanceRequest withQueryParams(PostModifyDbInstanceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyDbInstanceHeaders headers;
    public PostModifyDbInstanceRequest withHeaders(PostModifyDbInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyDbInstanceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}