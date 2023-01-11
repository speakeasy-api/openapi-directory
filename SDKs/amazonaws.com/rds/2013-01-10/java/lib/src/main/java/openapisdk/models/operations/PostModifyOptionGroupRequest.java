package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyOptionGroupRequest {
    public PostModifyOptionGroupQueryParams queryParams;
    public PostModifyOptionGroupRequest withQueryParams(PostModifyOptionGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyOptionGroupHeaders headers;
    public PostModifyOptionGroupRequest withHeaders(PostModifyOptionGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyOptionGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}