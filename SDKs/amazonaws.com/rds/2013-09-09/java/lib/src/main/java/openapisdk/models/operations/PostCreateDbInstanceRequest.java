package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDbInstanceRequest {
    public PostCreateDbInstanceQueryParams queryParams;
    public PostCreateDbInstanceRequest withQueryParams(PostCreateDbInstanceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateDbInstanceHeaders headers;
    public PostCreateDbInstanceRequest withHeaders(PostCreateDbInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateDbInstanceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}