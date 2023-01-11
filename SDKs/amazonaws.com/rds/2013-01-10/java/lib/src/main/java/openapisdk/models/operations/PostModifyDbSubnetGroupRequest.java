package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyDbSubnetGroupRequest {
    public PostModifyDbSubnetGroupQueryParams queryParams;
    public PostModifyDbSubnetGroupRequest withQueryParams(PostModifyDbSubnetGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyDbSubnetGroupHeaders headers;
    public PostModifyDbSubnetGroupRequest withHeaders(PostModifyDbSubnetGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyDbSubnetGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}