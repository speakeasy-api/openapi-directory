package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyHostsRequest {
    public PostModifyHostsQueryParams queryParams;
    public PostModifyHostsRequest withQueryParams(PostModifyHostsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyHostsHeaders headers;
    public PostModifyHostsRequest withHeaders(PostModifyHostsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyHostsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}